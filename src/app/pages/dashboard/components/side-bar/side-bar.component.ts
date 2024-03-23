import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.blockUI.start();
    this.messageService.successMessage('Logout realizado com sucesso');
    this.router.navigate(['/']);
    this.blockUI.stop();
  }

}
