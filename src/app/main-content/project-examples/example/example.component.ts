import { Component, Input, Output, EventEmitter,ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ProjectInterface } from '../../../project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent{
  
@Input()singleProject ={
  name:"Sharkie",
  url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
  img:"assets/img/Sharkie",
  date:"",
  info:"",
  usedLanguages:["HTML","CSS", "JavaScript"],
  gitHub:""
};
@Input()even = false;
@Output()projectName = new EventEmitter <string>();
constructor(){
}
}