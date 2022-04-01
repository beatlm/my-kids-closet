import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closet',
  templateUrl: './closet.component.html',
  styleUrls: ['./closet.component.css']
})
export class ClosetComponent implements OnInit {
   title="Armarios";
    closets=  [];

  constructor() { 
   


  }

  ngOnInit(): void {
 this.closets.push("Daniela");
  }

}
