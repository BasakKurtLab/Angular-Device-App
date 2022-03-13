import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../models/device';
import { DevicesService } from '../service/devices.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  device: any;
  error: any;

  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.devicesService.getItem(params.get('id')).subscribe((d) => {
        console.log(d);
        this.device = d;
      },
      error =>this.error = error);
    });
  }
}
