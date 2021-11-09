import { Component, OnInit, ViewChild } from '@angular/core';
import { TourEventsService } from '../core/services/tour-events.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  p: Number = 1;
  count: Number = 5;
  selectedCourse:any = {};
  employeeData:any;
  constructor(private te:TourEventsService) { }
  
  ngOnInit(): void {
    this.te.getDetails().subscribe(d =>{
      console.log(d);
      
    })

  }
  saveCourse(courses:any){
    var data = {
        "firstName": courses.firstName,
        "email": courses.email,
        "Paid": courses.paid,
        "Unpaid":courses.unpaid,
        "admissionDate": courses.admissionDate,
        "lastName": courses.lastName,
        "phoneNumber": courses.phone
    }
    this.te.postDetails(data).subscribe(val =>{
      console.log("val",val);
      this.cancel();
      
    })
    
  
  }
  // selectCourse(courses:any){
  //   this.selectedCourse = courses;
  //   console.log(courses)
  //   console.log(courses.id);

  // }

  cancel(){
    this.selectedCourse=  [];
  }

  

}
