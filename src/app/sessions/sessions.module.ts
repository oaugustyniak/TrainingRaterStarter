import { NgModule } from '@angular/core';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsService } from './sessions.service';
import { CommonModule } from '@angular/common';
import { SessionsDetailComponent } from './sessions-list/session-detail/session-detail.component';
import { FormsModule } from '@angular/forms';
import { SessionRatingComponent } from './sessions-list/session-rating/session-rating.component';
import { SessionRatingsService } from './sessions-list/session-rating/session-ratings.service';

@NgModule({
    declarations: [
        SessionsListComponent,
        SessionsDetailComponent,
        SessionRatingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        SessionsService,
        SessionRatingsService,
    ],
})
export class SessionsModule { }
