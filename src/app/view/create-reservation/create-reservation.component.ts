import { Component } from '@angular/core';
import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { SessionStorageService } from 'src/app/services/others/session-storage.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {

  reservationForm: FormGroup;
  title = 'angular-dialog';
  constructor(private matDialog: MatDialog, private sessionStorageService: SessionStorageService) {

    const userInformation = this.sessionStorageService.getInformationSession();

    this.reservationForm = new FormGroup({
      nombre: new FormControl(userInformation.name, Validators.required),
      phone: new FormControl(userInformation.phone, Validators.required),
      email: new FormControl(userInformation.email, Validators.required),
      fecha: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      coment: new FormControl('', Validators.required)
    });

    this.reservationForm.get('fecha')?.valueChanges.subscribe((value: string) => {

      const fechaDate = new Date(value);
      const day = fechaDate.getDay();
      this.getDay(day);
      console.log(this.getDay(day));
    });
  }

  getDay(day: number) {
    let fechaReserva;
    switch (day) {
      case 0:
        fechaReserva = 'Lunes'; break
      case 1:
        fechaReserva = 'Martes'; break
      case 2:
        fechaReserva = 'Miercoles'; break
      case 3:
        fechaReserva = 'Jueves'; break
      case 4:
        fechaReserva = 'Viernes'; break
      case 5:
        fechaReserva = 'Sabado'; break
      case 6:
        fechaReserva = 'Domingo'; break
    }
    return fechaReserva;
  };

  openDialog() {
    this.matDialog.open(DialogBodyComponent, {
      width: '450px',

    })
  }
  submitReservation() {
    // console.log(this.reservationForm.value);
  }
  clearForm() {
    // this.reservationForm.clearAsyncValidators();
  }
}

