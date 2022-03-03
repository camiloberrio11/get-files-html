import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss'],
})
export class ExternalLinksComponent implements OnInit {
  webUrl: SafeResourceUrl = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    const url =
      params?.language === 'en'
        ? environment?.urlVivaExternalEnglish
        : environment?.urlVivaExternal;
    this.webUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
