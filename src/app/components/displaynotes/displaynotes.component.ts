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

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() notesData : any
  @ViewChild('unarchiveButton')
  unarchiveButton!: TemplateRef<any>;
  // Output to emit events to parent component
  @Output() updateList = new EventEmitter<{ action: string, data: { title: string, description: string, noteID: number, color: string, archive: boolean } }>();
  
  // Input to receive note data from parent component
  @Input() note!: { title: string, description: string, noteID: number, color: string, archive: boolean };
  
  // Input to receive icon action from parent component
  @Input() iconAction!: string;
  
  // Flag to toggle color picker visibility
  showColorPicker: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog, public snackBar: MatSnackBar) {
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
  handleIconsClick(action: string, noteID: number) {
    // This method is intentionally left empty
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
  openEditNote() {
    // This method is intentionally left empty
  }

  // Open snackbar to display messages
  openSnackBar(message: string) {
    // This method is intentionally left empty
  }
}