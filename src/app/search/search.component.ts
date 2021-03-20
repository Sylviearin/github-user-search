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
      id: new FormControl('', [MyValidators.idPattern, Validators.required])
    });
  }

  submit(): void {
    this.userStorage.getById(this.form.value.id)
      .subscribe((data) => {
        console.log(data);
        this.userStorage.users.push(data as User);
      }, (error) => {
        this.errorMessage = error.message;
        setTimeout(() => this.errorMessage = '', 3000);
      });
  }
}
