import { Component, OnInit } from '@angular/core';
import { DumbService } from 'src/app/dumb.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {


  constructor(public service:DumbService) { }

  ngOnInit(): void {
  }

}
