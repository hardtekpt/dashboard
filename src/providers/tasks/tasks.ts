import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksProvider {

  constructor(public http: Http) {
  }

  	showTasks(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get('https://morning-headland-11208.herokuapp.com/tasks/show', {headers:headers}).map(res => res.json());
	}

	addTask(task){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('https://morning-headland-11208.herokuapp.com/tasks/add',task, {headers:headers}).map(res => res.json());
	}

	deleteTask(task_id){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get('https://morning-headland-11208.herokuapp.com/tasks/'+task_id+'/delete', {headers:headers}).map(res => res.json());
	}


}
