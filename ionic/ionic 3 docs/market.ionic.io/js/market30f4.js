/*!
 * Ionic IO
 * Copyright 2014 Drifty Co. http://drifty.com/
 */
(function(){
//jscs:disable
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-44023830-17', 'auto');
  ga('send', 'pageview');
//jscs:enable
var app = angular.module('Market', ['ui.bootstrap','mentio','chart.js']);
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
app.config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    colours: ['#4087fb', '#4dd87b', '#FF8A80','#FDB45C','#46BFBD', '#9F5CB9'],
    responsive: false
  });
}]);
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
app.controller('SearchCtrl', ['$scope', '$http', '$filter', '$location',
                function($scope, $http, $filter, $location) {
  var results = [];
  $scope.query = $location.search().q;
  $http.get('/ajax/search?q=' + $scope.query).then(function(response) {
    results = response.data;
    $scope.filteredResults = chunk(filterEnabled(results), 4);
  });
}]);
app.controller('UserCtrl', ['$scope', '$http', '$filter', '$location',
                function($scope, $http, $filter, $location) {
  var results = [];
  $scope.query = window.id;
  $http.get('/ajax/user?u=' + $scope.query).then(function(response) {
    results = response.data;
    $scope.filteredResults = chunk(filterEnabled(results), 4);
  });
}]);
app.controller('PurchasedCtrl', ['$scope', '$http', '$filter', '$location',
                function($scope, $http, $filter, $location) {
  var results = [];
  $http.get('/ajax/purchased').then(function(response) {
    results = response.data;
    $scope.filteredResults = chunk(filterEnabled(results), 4);
  });
}]);
app.controller('RatingsCtrl', ['$scope', '$http', '$filter',
                function($scope, $http, $filter) {
  $scope.newRatings = [];
  $scope.stars = 0;
  $scope.enabled = true;
  $scope.postRating = function() {
    if (!$scope.newRating || $scope.newRating == '') {
      return;
    }
    var postData = {
      comment: $scope.newRating,
      category: category,
      ion: page,
      stars: $scope.stars
    };
    $http.post('/ajax/rating', postData).success(function(response) {
      //console.log(postData, response);
      if (response === true) {
        $scope.newRating = '';
        $scope.newRatings.push(postData);
        $scope.enabled = false;
      }
    });
  };
}]);
app.controller('CommentsCtrl', ['$scope', '$http', '$filter',
                function($scope, $http, $filter) {

  $scope.$on('newReply', function (event, newStamp, newReply) {
    $scope.$broadcast('updateReplies', newStamp, newReply);
  });

  $scope.$on('onLastRepeat', function (scope, element, attrs){
    $scope.$applyAsync( function () {
      $scope.colorMentions();
    });
  });

  function getIdByName (name) {
    for (var i = 0; i < $scope.people.length; i++){
      if($scope.people[i].label === name) {
        return $scope.people[i].id;
      }
    }
    return null;
  }

  // change color of @ mentions in view
  $scope.colorMentions = function () {

    var targets = document.getElementsByClassName('colorable');
    for(var i = 0; i < targets.length; i++) {
      var innerArray = targets[i].innerHTML.split(' ');
      targets[i].innerHTML = innerArray.map( function (curr) {
        if (curr.slice(0,1) === '@' && getIdByName(curr.slice(1))) {
          return '<a class="atMention" href="http://market.ionic.io/user/' + getIdByName(curr.slice(1)) + '">' + curr + '</a>';
        }
        return curr;
      }).join(' ');
    }
  };


  // detect @ mention
  $scope.getMentions = function (comment) {

    var mentionArray = comment.split(' ')
    .filter( function (curr) {
        return curr.slice(0,1) === '@' && getIdByName(curr.slice(1));
    })
    .map( function (curr) {
      return getIdByName(curr.slice(1));
    });

    return mentionArray;
  }

  $scope.newComments = [];
  $scope.postComment = function() {

    if (!$scope.newComment || $scope.newComment == '') {
      return;
    }

    var postData = {
      comment: $scope.newComment,
      category: category,
      ion: page,
      mentions: $scope.getMentions($scope.newComment)
    };
    $http.post('/ajax/comment', postData).success(function(response) {
      if (!response.error === true) {
        $scope.newComment = '';
        $scope.newStamp = response.stamp;
        $scope.newComments.push(postData);
      }
    });
  };
}]);
app.controller('ReplyCtrl', ['$scope', '$http', function($scope, $http){

  if(!$scope.timestamp){
    $scope.timestamp = $scope.newStamp;
  }

  $scope.newReplies = [];
  $scope.editing = false;
  $scope.replyBtnText = 'reply';
  $scope.toggleReply = function () {
    $scope.editing = !$scope.editing;
    $scope.replyBtnText = $scope.editing ? 'close' : 'reply';
  };
  $scope.postReply = function() {
    if (!$scope.replyText || $scope.replyText == '') {
      $scope.toggleReply();
      return;
    }

    var postData = {
      comment: $scope.replyText,
      category: category,
      ion: page,
      id: $scope.timestamp,
      commenterIds: $scope.commenterIds,
      mentions: $scope.getMentions($scope.replyText)
    };
    $http.post('/ajax/comment', postData).success( function(response) {
      if (response === true) {
        $scope.replyText = '';
        $scope.toggleReply();
        $scope.newReplies.push(postData);
        $scope.$emit('newReply', $scope.timestamp, postData);
      }
    });
  };
  $scope.$on('updateReplies', function (event, newStamp, newReply) {
    if($scope.timestamp === newStamp && $scope.newReplies.indexOf(newReply) === -1){
      $scope.newReplies.push(newReply);
    }
  });
}]);
app.controller('DashboardCtrl', ['$scope', '$http',
                function ($scope, $http) {
  $scope.ions = [];
  $scope.showPies = false;
  $scope.pie = "downloads"
  $scope.togglePies = function (pie) {
    if(pie === 'views'){
      $scope.pie = 'downloads';
    }
    if(pie === 'external'){
      $scope.pie = 'externalVisited';
    }
  }
  $http.get('/ajax/dashboard').success( function (response) {
    $scope.ions = response;
    $scope.ions = $scope.ions.sort(function (a,b) {
      return b.purchases.length - a.purchases.length;
    });
    $scope.downloadCount = $scope.ions.reduce(function(prev, ion) {
      if(ion.downloads){
        return prev + 1;
      }
      else {
        return prev;
      }
    }, 0);
    $scope.externalCount = $scope.ions.reduce(function(prev, ion) {
      if(ion.externalVisited){
        return prev + 1;
      }
      else {
        return prev;
      }
    }, 0);

    if($scope.externalCount > 1 && $scope.downloadCount <= 1) {
      $scope.pie = 'externalVisited'
      $scope.externalStatus = 'selected';
    }

  });
}]);
app.controller('ListCtrl', ['$scope', '$http', '$filter',
                function($scope, $http, $filter) {
  $scope.ions = [];
  // note this assumes page var is set on window
  if (!page) {
    console.error('Required window.page var not set');
    return;
  }
  $http.get('/ajax/' + page).then(function(response) {
    if (response.data instanceof Array === false) {
      alert('Unable to retrieve ' + page);
      return;
    }
    //console.log(response)
    $scope.ions = response.data;
    $scope.popular = chunk($filter('orderBy')(response.data, 'views',
                                                             'reverse'), 4);
    $scope.newest = chunk($filter('orderBy')(response.data, 'released',
                                                            'reverse'), 4);
    $scope.priceLow = chunk($filter('orderBy')(response.data, 'price'), 4);
    $scope.priceHigh = chunk($filter('orderBy')(response.data, 'price',
                                                               'reverse'), 4);
  });
}]);

app.directive('onLastRepeat', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$emit('onLastRepeat');
    }
  };
});

app.directive('timeStamp', function() {
  return {
    scope: {
      timeStamp: '@'
    }
  }
});

app.directive('dashIon', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      ion: '='
    },
    controller: function ($scope) {

      $scope.reducePurchases = function () {
        return $scope.ion.purchases.reduce(function(prev, purchase) {
          return prev + purchase.amount;
        }, 0);
      }

      $scope.trimName = function (name) {
        if(name.length < 30) {
          return name;
        }
        return name.slice(0, 26) + '...';
      }

      $scope.averageRating = function () {
        var sum = $scope.ion.ratings.reduce (function(prev, curr) {
          return prev + curr.score;
        }, 0);
        var num = $scope.ion.ratings.length;
        return Math.round( (sum/num) * 10) / 10;
      }

      if( $scope.ion.purchases &&
          $scope.ion.purchases.length > 1 &&
          checkDateSpread($scope.ion.purchases) ) {
        $scope.graphClass = 'big';
      }
      else {
        $scope.graphClass = 'small';
      }

      function checkDateSpread (purchases) {
        var timeStrings = purchases.map(function (purchase) {
          var date = new Date(purchase.date*1000);
          return date.getMonth() + date.getYear();
        });
        for(var i = 1; i < timeStrings.length; i++){
          if(timeStrings[0] !== timeStrings[i]){
            return true;
          }
        }
        return false;
      }
    },
    templateUrl: '../templates/dashIon.html'
  };
});
app.directive('ionsPie', ['$sce', function ($sce) {
  return {
    restrict: 'E',
    scope: {
      ionList: '=',
      metric: '='
    },
    controller: function ($scope) {

      // watch metric
      $scope.$watch('metric', function() {
        // config ionList
        editedList = $scope.ionList
        .filter(function(ion) {
          return ion[$scope.metric];
        })
        .map(function(ion) {
          var newIon = {};
          newIon.name = ion.name;
          newIon.slug = ion.slug;
          newIon[$scope.metric] = ion[$scope.metric];
          return newIon;
        })
        .sort(function(a,b) {
          return a[$scope.metric] - b[$scope.metric];
        })
        .reverse();

        // set up graph
        $scope.labels = editedList.map(function (ion) {
          return ion.name;
        });
        $scope.data = editedList.map(function (ion) {
          return ion[$scope.metric];
        });
        $scope.$on('create', function (event, chart) {
           $scope.legendString = $sce.trustAsHtml(chart.generateLegend());
        });
      });
    },
    templateUrl: '../templates/ionsPie.html'
  };
}]);
app.directive('ionGraph', function () {
  return {
    restrict: 'E',
    scope: {
      graphData: '@',
    },
    controller: function ($scope) {

      function generateData (metric) {
        return dataPoints.map( function (curr) {
          return curr[metric];
        })
      }

      $scope.setGraph = function (option) {
        $scope.data = [generateData(option)];
      }

      $scope.graphData = JSON.parse($scope.graphData);

      var test = $scope.graphData.sort(function(a,b) {
        return a.date - b.date;
      });

      var minDate = $scope.graphData[0];
      var maxDate = $scope.graphData[$scope.graphData.length - 1];

      var timeIntervals = generateIntervals(minDate.date, maxDate.date);
      var dataPoints = generatePoints($scope.graphData, timeIntervals);
      $scope.labels = generateLabels(timeIntervals);
      $scope.data = [generateData('amount')];
      $scope.options = {
        gridLines: {
          display: false
        },
        scaleFontFamily: "'Avenir Next'",
        padding: 10,
        scaleFontColor: 'black'
      };

    },
    templateUrl: '../templates/ionGraph.html'
  }
});
app.directive('ionListing', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      category: '@',
      ion: '='
    },
    controller: function($scope) {
      //console.log($scope.ion);
    },
    template: [
      '<a ng-href="/{{category}}/{{ion.slug}}" target="_self">',
        '<div class="clip-group"',
             'ng-class="{v2:{{ion.ionic.join(\',\').indexOf(\'2.x\') != -1}}, v3:{{ion.ionic.join(\',\').indexOf(\',3.x\') != -1}}}">',
          '<img ng-src="{{ ion.icon }}" alt="{{ ion.name }}">',
          '<div class="clipping-mask"></div>',
        '</div>',
        '<h4>{{ ion.name }}</h4>',
        '<p>{{ ion.tagline }}</p>',
        '<div class="stars" ng-if="ion.ratings.length > 0">',
          '<rating val="{{ ion.ratingAverage }}" max="5" readonly="true">',
          '</rating>({{ ion.ratings.length }})',
        '</div>',
        '<div ng-transclude></div>',
      '</a>'
    ].join('')
  };
});

// ### Utils ###

window.generateLabels = function(intervals) {
  var now = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var labels = intervals.map(function (interval, index) {
    interval = new Date(interval);
    if( index === 0 && interval.getYear() < now.getYear()) {
      return monthNames[interval.getMonth()] + ', ' + interval.getFullYear();
    }
    else if (interval.getMonth() === 0 && interval.getYear() < now.getYear()) {
      return labels.push('January, ' + interval.getFullYear());
    }
    else {
      return monthNames[interval.getMonth()];
    }
  });

  return labels;
}

window.generatePoints  = function(data, intervals) {

  function placePoint (point, index) {
      points[index].amount += point.amount;
      points[index].count += 1;
  }

  var points = [];
  points[0] = { amount: 0, count: 0 };
  points[1] = { amount: 0, count: 0 };

  var intervalIndex = 1;
  data.forEach(function (dataPoint) {

    var notPlaced = true;
    while(notPlaced) {

      if(intervalIndex === intervals.length - 1) {
        placePoint(dataPoint, intervalIndex);
        notPlaced = false;
      }

      else if(dataPoint.date*1000 < intervals[intervalIndex]) {
        placePoint(dataPoint, intervalIndex - 1);
        notPlaced = false;
      }

      else {
        intervalIndex++;
        points[intervalIndex] = { amount: 0, count: 0 };
      }
    }

    return;
  });

  return points;
}

window.generateIntervals = function(min, max) {
  var minDate = new Date(min*1000);
  var maxDate = new Date(max*1000);

  minDate.setDate(1);

  var intervals = [];
  while(minDate.getMonth() <= maxDate.getMonth() || minDate.getYear() < maxDate.getYear()) {

    intervals.push(minDate.getTime());
    minDate.setMonth(minDate.getMonth() + 1);
  }

  return intervals;
}

window.filterEnabled = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i].enabled) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
window.chunk = function(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
window.searchActivate = function(el) {
  el.parentElement.classList.add('active');
}
window.searchDeactivate = function(el) {
  el.parentElement.classList.remove('active');
}
window.navigate = function() {
  setTimeout( function () {
    location.reload();
  }, 200);
}
window.trackDemo = function(url, category, slug) {
  $.get('/ajax/analytics',{c: category, i: slug, t: 'demo'});
  ga('send', 'event', 'outbound', 'click', url, {});
};
window.trackDownload = function(url, category, slug) {
  $.get('/ajax/analytics',{c: category, i: slug, t: 'download'});
  ga('send', 'event', 'outbound', 'click', url, {});
};
window.trackOut = function(url, category, slug) {
  $.get('/ajax/analytics',{c: category, i: slug, t: 'external'});
  ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
    function() {
      //window.open(url);
    }
  });
};
$('body').on('click', function(e) {
  //only buttons
  if ($(e.target).data('toggle') !== 'popover' &&
      $(e.target).is(':not(.clip-circle)') &&
      $(e.target).parents('.popover.in').length === 0) {
    $('[data-toggle="popover"]').popover('hide');
  }
});

})();