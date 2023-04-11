import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private clServ: ClientService) { }
  ngOnInit() {
    this.clServ.apiListAllUser.subscribe((arg:any ) => console.log(arg)
    );

  }
  title = 'userlsit-colab';

}
