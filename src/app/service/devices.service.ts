import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:3006/devices';

  constructor(private http: HttpClient) {}
 
  // this method returns list-of-items in form of Observable
  // every Http call returns Observable object
  resolveItems(): Observable<Device[]> {  
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get<Device[]>(this.URL).pipe(
      map((devices) =>
        devices.map((device) => ({
          id: device.id,
          name: device.name.toUpperCase(),
          description: device.description,
          status: device.status,
          isStatus: device.status === 1 ? 'Online' : 'Offline',
          image: device.image,
        }))
      ),
      catchError(this.handleError)
    );
  }
  getItem(id: string | null) {
    return this.http.get(`${this.URL}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client error
      console.log('client error: ' + error.error.message);
    } else {
      // backend error
      console.log(
        `backend error: status code: ${error.status}' error: ${error.error} `
      );
    }
    return throwError('404 Not Found');
  }
}
