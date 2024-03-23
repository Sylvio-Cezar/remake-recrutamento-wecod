import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  email: any;
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    this.getUserByEmail();
  }

  async getUserByEmail() {
    const data = await this.userService.getUserByEmail(this.email);
    this.user = data;
  }

  backToList() {
    this.router.navigate(['/dashboard/user-list']);
  }

}
