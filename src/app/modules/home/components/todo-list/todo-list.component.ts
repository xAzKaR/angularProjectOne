import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [

  ];
  constructor() {

  }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deletarAllTaskList() {
    const confirm = window.confirm("Você deseja deletar todos os itens?")

    if (confirm == true) {
      this.taskList = [];
    }
  }
}
