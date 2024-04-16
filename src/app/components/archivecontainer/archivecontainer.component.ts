import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';
import { NoteService } from 'src/app/services/noteService/note.service';

interface NoteObj {
  noteId?: number,
  title?: string,
  description?: string,
  isArchived?: boolean,
  isDeleted?: boolean,
  color?: string
}

@Component({
  selector: 'app-archivecontainer',
  templateUrl: './archivecontainer.component.html',
  styleUrls: ['./archivecontainer.component.scss']
})
export class ArchivecontainerComponent implements OnInit {
  notesList : NoteObj[] = []
  //notesList: { title: string; description: string; noteID: number; color:string, archive:boolean }[] = [];
  
  @Output() updateList = new EventEmitter<{ action: string, data: { title: string, description: string, noteID: number, color:string, archive: boolean } }>();
  
  iconAction: string = '';
  searchString!:string
  subscription!:Subscription

  constructor(private noteService: NoteService, private data: DataService) {}

  ngOnInit(): void {
    this.noteService.getAllNotesCall().subscribe((res)=>{this.notesList = res.data}, (err)=>{console.log(err)})
  } 

  handleUpdateNotesList($event: {action: string, data: NoteObj}) {
    console.log($event);
    const {action, data} = $event
    if(action === "create") {
      this.notesList = [$event.data, ...this.notesList]
    } else if(action === "unarchive" || action === "trash") {
      this.notesList = this.notesList.filter(note => note.noteId != data.noteId)
    }
  }  
}

