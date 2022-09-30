import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  show = false
  name = ''
  email = ''
  message = ''
  constructor() { }

  ngOnInit(): void {
  }
  Onsend(){
    this.show = !this.show
  }

}
