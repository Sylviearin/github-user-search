import { Component, OnInit } from '@angular/core';
import {User, UserStorageService} from '../user-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my.validators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  users = this.userStorage.users;
  errorMessage = '';
  form!: FormGroup;
  constructor(public userStorage: UserStorageService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [MyValidators.idPattern, Validators.required])
    });
  }
  submit(): void {
    const sameUserIndex = this.users.findIndex(user => user.login === this.form.controls.login.value.toLowerCase());
    if ( sameUserIndex === 0 ) {
      return;
    } else if (sameUserIndex > 0) {
      this.users.unshift(
        this.users.splice(sameUserIndex, 1)[0]);
      return;
    }
    this.userStorage.getById(this.form.value.login)
      .subscribe((data) => {
        console.log(data);
        this.users.unshift(data as User);
      }, (error) => {
        this.errorMessage = error.message;
        setTimeout(() => this.errorMessage = '', 3000);
      });
  }
}
