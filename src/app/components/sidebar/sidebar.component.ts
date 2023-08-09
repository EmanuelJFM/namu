import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{ 

  @Input() isOpen: boolean= false;

  constructor(private router: Router) {

  }
  goToMyReservation(){
    this.router.navigateByUrl('/layout/my-reservation')
  }

  goToCreateReservation(){
    this.router.navigateByUrl('/layout/create-reservation')
  }

  goToLogOut(){
    this.router.navigateByUrl('/login')
  }

  toggleSidebar(){
    this.isOpen = !this.isOpen
  }

}

