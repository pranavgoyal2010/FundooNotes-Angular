import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService: HttpService) { }

  getAllNotesCall() {
    return this.httpService.getAllNotes("note");
  }

  addNoteCall(data: Object) {
    return this.httpService.addNote("note", data);
  }

  archiveNoteCall(noteId: number) {
    return this.httpService.archiveNote(`note/archive/${noteId}`);
  }  
}
