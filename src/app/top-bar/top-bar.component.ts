import { Component, OnInit } from '@angular/core';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faCartShopping = faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

}
