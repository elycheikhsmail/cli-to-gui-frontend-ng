import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {

 @Input() desc:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
