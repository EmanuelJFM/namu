import { Component} from '@angular/core';
import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {

  title = 'angular-dialog';
  constructor(private matDialog: MatDialog){

  }
   openDialog(){
      this.matDialog.open(DialogBodyComponent,{
        width: '450px',

      })
    }
}

