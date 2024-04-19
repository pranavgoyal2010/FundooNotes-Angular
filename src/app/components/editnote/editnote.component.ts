import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteObj } from 'src/assets/type';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
  title? : string
  description? : string

  constructor( public dialogRef: MatDialogRef<EditnoteComponent>, @Inject(MAT_DIALOG_DATA) public data: NoteObj) {    
    this.title = data.title
    this.description = data.description    
  }

  ngOnInit(): void {
  }

  handleEditNote(){
    this.dialogRef.close("abc")
  }
}
