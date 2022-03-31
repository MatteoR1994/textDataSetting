import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/dumb.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private service:DumbService) { }

  ngOnInit(): void {
    this.displayText();
  }

  displayText(){
  
   const insertedText = this.service.text;
   const colorToApply = this.service.color;
    const p = document.getElementById('textChanged');
    const node = document.createTextNode(insertedText);
    if(p){
      p.style.color=colorToApply
      p.appendChild(node);
    }
    
  }


}
