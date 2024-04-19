import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  IMG_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  EDIT_ICON,
  UNARCHIVE_ICON,
  RESTORE_ICON,
  DELETE_FOREVER_ICON
} from 'src/assets/svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteObj } from 'src/assets/type';
import { NoteService } from 'src/app/services/noteService/note.service';
import { EditnoteComponent } from '../editnote/editnote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() notesData : NoteObj[] = []
  @Input() container : string = ""
  @ViewChild('unarchiveButton')
  unarchiveButton!: TemplateRef<any>;
  // Output to emit events to parent component
  @Output() updateNotesList = new EventEmitter<{ action: string, data: NoteObj}>();
  
  // Input to receive note data from parent component
  @Input() note!: { title: string, description: string, noteID: number, color: string, archive: boolean };
  
  // Input to receive icon action from parent component
  @Input() iconAction!: string;
  
  // Flag to toggle color picker visibility
  showColorPicker: boolean = false;  

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog, public snackBar: MatSnackBar, private noteService: NoteService) {
    // Register SVG icons
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('coll-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('Color-Palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('delete-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
  }
  
  ngOnInit(): void {
  }

  // Handle click events on icons
  handleIconsClick(action: string, note: NoteObj) {
    // This method is intentionally left empty
    // API CALLING
    // EMITING EVENT
    if (action === "archive") {
      this.noteService.archiveNoteCall(note.noteId || 0).subscribe(() => {
        this.updateNotesList.emit({ action: "archive", data: note})
      }, (err: any) => console.log(err))
    }
    else if(action === "unarchive") {
      this.noteService.archiveNoteCall(note.noteId || 0).subscribe(() => {
        this.updateNotesList.emit({ action: "unarchive", data: note})
      }, (err: any) => console.log(err))
    }    
    else if (action === "trash") {
      // Move note to trash
      this.noteService.trashNoteCall(note.noteId || 0).subscribe(() => {
        this.updateNotesList.emit({ action: "trash", data: note });
      }, (err: any) => console.log(err));
    }
    else if (action === "untrash") {
      // Move note to trash
      this.noteService.trashNoteCall(note.noteId || 0).subscribe(() => {
        this.updateNotesList.emit({ action: "untrash", data: note });
      }, (err: any) => console.log(err));
    }
    else if (action === "delete") {
      // Move note to trash
      this.noteService.deleteNoteCall(note.noteId || 0).subscribe(() => {
        this.updateNotesList.emit({ action: "delete", data: note });
      }, (err: any) => console.log(err));
    }
    else
    {
      //API calling
      this.noteService.updateNoteCall(note.noteId || 0, note).subscribe(() => {
        this.updateNotesList.emit({ action: "color", data: {...note, colour: action}})
      }, (err: any) => console.log(err));
    }
  }

  // Toggle color picker visibility
  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  // Select a color for the note
  selectColor(color: string, noteID: number) {
    // This method is intentionally left empty
  }

  // Open edit note dialog
  openEditNote(noteObj : NoteObj) {
    let dialogRef = this.dialog.open(EditnoteComponent, {data : noteObj})
    dialogRef.afterClosed().subscribe((res)=>console.log(res))
  }

  // Open snackbar to display messages
  openSnackBar(message: string) {
    // This method is intentionally left empty
  }
}