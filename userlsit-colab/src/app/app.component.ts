import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: any
  public modal: Boolean = false
  constructor(private clServ: ClientService,
    private dialog: MatDialog) { }
  ngOnInit() {
    this.getUser()
    setTimeout(() => {
      console.log(this.user, 'user');
    }, 300);
  }
  title = 'userlsit-colab';
  getUser() {
    this.clServ.apiListAllUser.subscribe((arg: any) => this.user = arg.results);
  }
  openModal() {
    this.modal = !this.modal
  }
  openDialog(usuario:any) {
    const dialogRef = this.dialog.open(DetalhesComponent, {
      width: '500px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
