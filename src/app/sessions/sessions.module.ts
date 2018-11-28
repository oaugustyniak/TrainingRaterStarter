import { NgModule } from '@angular/core';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsService } from './sessions.service';
import { CommonModule } from '@angular/common';
import { SessionsDetailComponent } from './sessions-list/session-detail/session-detail.component';

@NgModule({
  declarations: [
      SessionsListComponent,
      SessionsDetailComponent
  ],
  imports: [
      CommonModule,
  ],
  providers: [
      SessionsService,
  ],
})
export class SessionsModule { }
