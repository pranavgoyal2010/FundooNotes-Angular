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
  colour? : string
  noteService: any;

  constructor( public dialogRef: MatDialogRef<EditnoteComponent>, @Inject(MAT_DIALOG_DATA) public note: NoteObj) {    
    this.title = note.title
    this.description = note.description    
    this.colour = note.colour
  }

  ngOnInit(): void {
  }

  handleEditNote(){  
    const updatedNote : NoteObj = {
      ...this.note,
      title: this.title,
      description: this.description,
      colour : this.colour
    }  
    this.dialogRef.close(updatedNote)
  }

  toggleColorPicker()
  {
    
  }
}
