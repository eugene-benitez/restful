import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  addTask: any;
  tasks: any = [];
  singleTask: any = [];
  newTask: any = {
    title: '',
    description: ''
  };

  editForm = false;
  editTask: any = {
    title: '',
    description: '',
  }

  oneTask: any = [];

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: '', description: '' }
  }

  onSubmit() {
    this._httpService.addTask(this.newTask)
      .subscribe(data => this.newTask = data);
    console.log(this.newTask);
  }

  onEdit() {
    this._httpService.updateTask(this.singleTask._id, this.editTask)
      .subscribe(data => this.newTask = data);
  }

  getTasksFromService() {
    this._httpService.getTasks()
      .subscribe(data => this.tasks = data);
  }

  onButtonClickParam(str: string): void {
    console.log(`Click event is working with string param: ${str}`);
    this.editForm = true;
    this._httpService.getTask(str)
      .subscribe(data => this.singleTask = data);
  }

  deleteButtonClickParam(str: string): void {
    console.log(`Click event is working with string param: ${str}`);
    this._httpService.deleteTask(str)
      .subscribe(data => this.oneTask = data);
    console.log(this.oneTask);

  }

}