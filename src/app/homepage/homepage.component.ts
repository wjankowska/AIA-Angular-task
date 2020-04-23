import { Component, OnInit } from '@angular/core';
import { IUser } from '../_interfaces/IUser';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public users: IUser[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe((res: IUser[]) => {
        this.users = res;
        console.log(res);
      })
  }

}
