import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from './components/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { FormsModule } from '@angular/forms';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { FundooheaderComponent } from './components/fundooheader/fundooheader.component';
//import { NotecardComponent } from './components/notecard/notecard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditnoteComponent } from './components/editnote/editnote.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CreatenoteComponent,
    DisplaynotesComponent,
    DashboardComponent,
    NotescontainerComponent,
    ArchivecontainerComponent,
    TrashcontainerComponent,
    FundooheaderComponent,
    SidenavComponent,
    EditnoteComponent,    
    //NotecardComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,    
    MatSidenavModule,  
    MatDialogModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }