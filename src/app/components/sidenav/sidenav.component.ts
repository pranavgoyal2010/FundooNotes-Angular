import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';

import {
  NOTE_ICON,
  REMINDER_ICON,
  EDIT_ICON,
  ARCHIVE_ICON,
  TRASH_ICON
} from 'src/assets/svg-icons';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  drawerState: boolean = false;
  subscription!: Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private data: DataService, public router: Router) {
    iconRegistry.addSvgIconLiteral("Note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("Reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("Edit-labels-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral("Archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("Trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
  }

  ngOnInit(): void {
    this.subscription = this.data.currDrawerState.subscribe((state: boolean) => this.drawerState = state)
  }
  
  archiveNavigate(bool : boolean) {
    // this.router.navigate(["/dashboard/archive"])
    // if(bool){
    // this.drawerState=!this.drawerState
    // }
  }
  notesNavigate(bool : boolean) {
    // this.router.navigate(["/dashboard/notes"])
    // if(bool){
    //   this.drawerState=!this.drawerState
    //   }
  }
  reminderNavigate(bool : boolean) {
    // this.router.navigate(["/dashboard/reminder"])
    // if(bool){
    //   this.drawerState=!this.drawerState
    //   }
  }
  editNavigate(bool : boolean) {
    // this.router.navigate(["/dashboard/edit"])
    // if(bool){
    //   this.drawerState=!this.drawerState
    //   }
  }
  trashNavigate(bool : boolean) {
    // this.router.navigate(["/dashboard/trash"])
    // if(bool){
    //   this.drawerState=!this.drawerState
    //   }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}