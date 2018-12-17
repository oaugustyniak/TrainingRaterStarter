import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { UsersComponent } from './users/users/users.component';
import { NgModule } from '@angular/core';
import { SessionsDetailComponent } from './sessions/sessions-list/session-detail/session-detail.component';
import { UsersDetailComponent } from './users/users/user-detail/user-detail.component';
import { AuthGuard } from './common/auth/auth.guard';
import { LoginComponent } from './common/auth/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sessions/:sessionId', component: SessionsDetailComponent },
  { path: 'users/:userId', component: UsersDetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
