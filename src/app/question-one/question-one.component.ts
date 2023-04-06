import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {
  public text:string ="პირველი კითხვა";
  checker:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  public check(){
    this.text="სწორია ";
    this.checker=true;

  }

}
