import { Component, OnInit } from '@angular/core';
import { TourEventsService } from './core/services/tour-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private tst:TourEventsService){}
  ngOnInit(): void {
    // this.tst.getEvents().subscribe(d =>{
    //   console.log("Get");
    //   console.log(d);
    // });

    //Post
    // var data = {
    //  "myText":"name"
    // }
    // this.tst.postEvents(data).subscribe(val =>{
    //     console.log("post");
    //     console.log(val);
    // })

    //FindById
    var data1 = "6170080855ca132c84f0a474";
    // this.tst.byId(data1).subscribe(val =>{
    //   console.log("ById");
    //   console.log(val);
    // })

    var data2 = {
      "myText":"Update"
    }
    //Update
    this.tst.update(data1,data2).subscribe(d =>{
      console.log("Update");
      console.log(d);
    });
  }
  
}
