import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../models/device';
import { DevicesService } from '../service/devices.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
 
  
  // @Input() item?: Device
 device: any;

  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute
  ) {}

 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.devicesService.getItem(params.get('id')).subscribe(d =>{
          console.log(d);
          this.device = d;
      })   
      });
    
    
     //this.getDevice();
  }

//  getItem():void {
//   const id = this.route.snapshot.paramMap.get('id');
//      this.devicesService.getItem(id)
//       .subscribe(device =>this.device = device);
//  }
  // getDevice(): void{
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.devicesService.getItem(id)
  //     .subscribe(item => this.item = item);
  //   console.log(this.item);
    
  //   }

}

