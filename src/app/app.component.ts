import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { SwPush, SwUpdate } from '@angular/service-worker';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  users = DUMMY_USERS
  selectedUserId = 'u1'

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate) {
  }

  ngOnInit(): void {

    //this.swUpdate.isEnabled;
    //throw new Error('Method not implemented.');
    this.swPush.messages.subscribe((data: any) => {

      console.log(data)
    })

  }

  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }





  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    console.log('User selected:', id)

  }
}
