import { Component, computed, Input, signal, input, output, Output, EventEmitter } from '@angular/core';

type User = {
  id: string
  avatar: string
  name: string
}

// interface User {
//   id: string
//   avatar: string
//   name: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) user!: User
  @Input() test: any
  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter<string>()
  //select = output<string>()

  //avatar = input<string>('')
  // REadonly
  // avatar = input.required<string>()
  // name = input.required<string>()

  //@Input({ required: true, }) name!: string

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  imagePath = computed(() => 'assets/users/' + this.avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.id)
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
