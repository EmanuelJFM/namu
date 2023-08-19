import { Component } from '@angular/core';
import { ModalEditComponent } from 'src/app/components/modal-edit/modal-edit.component';
import { ModalSeeComponent } from 'src/app/components/modal-see/modal-see.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.css']
})
export class MyReservationComponent {

  constructor(private matDialog: MatDialog){

  }
  openModalEdit(){
    this.matDialog.open(ModalEditComponent,{
      width:'450px'
    })
  }

  openModalSee(){
    this.matDialog.open(ModalSeeComponent, {
      width:'450px'
    })
  }
}
