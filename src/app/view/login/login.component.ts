import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/http/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'src/app/services/others/session-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private sessionStorageService: SessionStorageService) {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  doLogin(){

    this.loginService.doLogin(this.loginForm.value).subscribe(userInformation =>{
      this.sessionStorageService.setInformationSession(userInformation);
      this.router.navigateByUrl('/layout');
    });

  }
  createAccount(){
    this.router.navigateByUrl('/crear-cuenta')
  }
}
