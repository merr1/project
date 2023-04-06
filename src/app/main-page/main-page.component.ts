import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  data:any;
  public value:string="waiting";
  valid:boolean=false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
   // let headers = new HttpHeaders().set('Content-Language', this.lang);
    this.http
      .get<any>('https://api.chucknorris.io/jokes/random')
      .subscribe((meri:any) => {
         console.log(meri)
         console.log(meri.value)
         this.value=meri.value;

      });
  }
  fun(){
    if(this.valid){
      console.log("gavagzavnot request")
      this.valid=!this.valid;
    }else{
      console.log("wavshalot")
      this.valid=!this.valid;

    }
  }

}
