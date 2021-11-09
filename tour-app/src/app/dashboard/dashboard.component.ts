import { Component, OnInit } from '@angular/core';
import { TourEventsService } from '../core/services/tour-events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentDetails:any;
  constructor(private te:TourEventsService) { }
  p = 1;
  count = 5;
  ngOnInit(): void {
    this.te.getDetails().subscribe(d =>{
      this.studentDetails = d
      console.log(this.studentDetails);
    })
  }
  deleteData(id:any){
    this.te.deleteData(id).subscribe(d =>{
      console.log("click",d);
      this.ngOnInit();
    });
  }
  
}
