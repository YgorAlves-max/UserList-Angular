import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any
  ) { }

  ngOnInit() {
    console.log(this.user, 'user');

  }

}
