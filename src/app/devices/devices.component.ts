import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DevicesService } from '../service/devices.service';
import { Device } from '../models/device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  
  items: any[] = [];
  error: any;

  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
    this.devicesService.resolveItems().subscribe(
      (data: any[]) => {
        console.log(data);
        this.items = data;
      },
      (error) => (this.error = error)
    );
  }
 
}
