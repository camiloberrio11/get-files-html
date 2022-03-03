import { ExternalLinksComponent } from './external-links.component';
import { ExternalLinksRoutingModule } from './external-links-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, ExternalLinksRoutingModule],
  declarations: [ExternalLinksComponent],
})
export class ExternalLinksModule {}
