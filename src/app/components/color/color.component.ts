import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/dumb.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

//  insertedText : string ='';

  constructor(private service:DumbService) { }

  ngOnInit(): void {
    // this.insertedText=this.service.text
  }


  setColor(color:string){
    this.service.color=color
  }
}
