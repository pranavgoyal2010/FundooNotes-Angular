import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/services/noteService/note.service';
import {
  IMG_ICON,
  TICK_ICON,
  BRUSH_ICON,
  REMINDER_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  ARCHIVE_ICON,
  MORE_ICON,
  EDIT_ICON,
  UNDO_ICON,
  RESTORE_ICON
} from 'src/assets/svg-icons';

interface NoteObj {
  noteId?: number,
  title?: string,
  description?: string,
  isArchived?: boolean,
  isDeleted?: boolean,
  color?: string
}
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  // @Output() updateList = new EventEmitter<{
  //   action: string,
  //   data: {
  //     title: string,
  //     description: string,
  //     noteID: number,
  //     color: string,
  //     archive: boolean
  //   }
  // }>();

  @Output() updateNotesList = new EventEmitter<{action: string, data: NoteObj}>();

  hiddenCreateNote: boolean = true;
  title: string = "";
  description: string = "";
  archive: boolean = false;
  color: string = "";
  showColorPicker: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private noteService: NoteService) {
    // Register SVG icons
    iconRegistry.addSvgIconLiteral('Tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('Brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('Img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('edit-icon', sanitizer.bypassSecurityTrustHtml(EDIT_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('coll-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('Color-Palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON));
  }

  ngOnInit(): void {
  }

  handleCreateNote(action: string) {
    this.hiddenCreateNote = !this.hiddenCreateNote;
    if (action == "close" && (this.title != "" || this.description != "")) {
      const noteObj = {
        "title": this.title,
        "description": this.description,
        "color": "#ffffff",
      };
      // Emit event to update note list
      // this.updateList.emit({ action: "create", data: noteObj });
      this.noteService.addNoteCall(noteObj).subscribe(res=>{console.log(res)
        this.updateNotesList.emit({action: "create",  data: res.data})
      }, err=>{console.log(err)});
    }
    else if(this.showColorPicker==true) {
      this.toggleColorPicker();
    }
  }

  /*handleArchive() {
    this.archive = !this.archive;
    //console.log(this.archive);

    this.archive = !this.archive;

    const noteId = ;
    const noteObj: NoteObj = {
      noteId: noteId,
      isArchived: this.archive
    };

    this.noteService.archiveNoteCall().subscribe(
      (res) => {
        console.log(res)
        this.updateNotesList.emit({ action: "archive", data: noteObj });
      },
      (err) => {
        console.error(err);
      }
    );
  }*/

  selectColor(color: string) {
    this.color = color;
    this.showColorPicker = false;
  }

  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }
}
