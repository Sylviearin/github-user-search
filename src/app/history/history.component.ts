import { Component, OnInit } from '@angular/core';
import {UserStorageService} from '../user-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public userStorage: UserStorageService) { }

  ngOnInit(): void {
  }

}
