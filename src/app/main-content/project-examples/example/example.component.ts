import { Component, Input, Output, EventEmitter,ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ProjectInterface } from '../../../project';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent{
  
@Input()singleProject={
  name:"Sharkie",
  url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
  img:"assets/img/Sharkie",
  date:"",
  info:"",
  usedLanguages:["HTML","CSS", "JavaScript"],
};
@Input()even = false;
@Output()projectName = new EventEmitter <string>();
constructor(){
  
}
}
