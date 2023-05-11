import { Component } from '@angular/core';
import { AbstractControl, FormControl, NgForm } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  taskArray = [{taskName: null, isCrossedOut: false}]
  onSubmit(form: NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCrossedOut: false,
    })
    form.reset();
  }
  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }
  toggleCrossedOut(index: number){
    this.taskArray[index].isCrossedOut = !this.taskArray[index].isCrossedOut;
  }
};

