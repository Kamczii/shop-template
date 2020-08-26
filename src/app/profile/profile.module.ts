import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MatCardModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatTabsModule,
    SharedModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: []
})
export class ProfileModule { }
