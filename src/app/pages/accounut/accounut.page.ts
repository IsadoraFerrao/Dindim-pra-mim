import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-accounut',
  templateUrl: './accounut.page.html',
  styleUrls: ['./accounut.page.scss'],
})
export class AccounutPage implements OnInit {

  selectedVal:Number = 103;
  selectedVal2:Number = 105;
  selectedVal3:Number = 102;
  data:any[]=[];
  constructor(private platform:Platform) { 
    this.platform.ready().then(()=>{
      this.data = [{id: 101, name: "Julho/2020"}, {id: 102, name: "Price"}, {id: 103, name: "September/2020"}, {id: 105, name: "Category"}];
    })
  }

  ngOnInit(){

  }
  OnChange(event){
  }

}
