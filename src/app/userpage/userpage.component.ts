import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { IUser } from '../_interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../_interfaces/IPost';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public user: IUser = null;
  public posts: IPost[] = [];
  public showPostsBoolean: boolean = false;

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const url = this.route.snapshot.params.id;
    console.log(url)

    this.service.getUser(url)
      .subscribe((res: IUser[]) => {
        this.user = res[0];
        console.log(this.user);
      })

    this.service.getPostsByUser(url)
    .subscribe((res: IPost[]) => {
      this.posts = res;
      console.log(res);
    })
  }

  showPosts() {
    this.showPostsBoolean = true;
  }
}