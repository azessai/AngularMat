import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-exemple',
  templateUrl: './dialog-exemple.component.html',
  styleUrls: ['./dialog-exemple.component.scss']
})
export class DialogExempleComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('Data : ', this.data.name);
  }
}
