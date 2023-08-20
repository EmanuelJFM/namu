import { Injectable } from '@angular/core';
import { IUserInformation } from 'src/app/config/interfaces/userInformation.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  informationSession(userInformation: IUserInformation){
    sessionStorage.setItem('userInformation', window.btoa(JSON.stringify(userInformation)));
  }
}
