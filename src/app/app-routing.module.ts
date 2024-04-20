import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { AuthguardService } from './services/authService/authguard.service';

const routes: Routes = [
  {
    path: '',component:SigninComponent
  },
  {
    path: 'signup', component:SignupComponent
  },
  {
    path:'dashboard', component:DashboardComponent, canActivate: [AuthguardService], children: [
      {path: 'notes', component:NotescontainerComponent},
      {path: 'archive', component:ArchivecontainerComponent},
      {path: 'trash', component:TrashcontainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }