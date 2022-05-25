import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];
 
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks:any)=>(this.tasks=tasks));
  }

}
