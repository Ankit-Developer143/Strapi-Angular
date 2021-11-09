import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TourEventsService {
  private eventsPath = 'tests';
  private events = 'Students'
  constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get(environment.apiUrl + this.eventsPath);
  }
  postEvents(data: any) {
    return this.http.post(environment.apiUrl + this.eventsPath, data)
  }
  byId(data: any) {
    return this.http.get(`${environment.apiUrl}${this.eventsPath}/${data}`)
  }
  update(data: any,val:any) {
    return this.http.put(`${environment.apiUrl}${this.eventsPath}/${data}`,val)
  }
  getDetails(){
    return this.http.get(environment.apiUrl + this.events)
  }
  postDetails(data:any){
    return this.http.post(environment.apiUrl + this.events,data)
  }
  deleteData(id:any){
    return this.http.delete(`${environment.apiUrl}${this.events}/${id}`)
  }
}
