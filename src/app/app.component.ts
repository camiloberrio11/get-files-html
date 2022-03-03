import { Component } from '@angular/core';
import { GetFileService } from './get-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  htmlContent: any;
  constructor(private readonly fileService: GetFileService) {
    this.fileService.getFile('/assets/html/prueba.html').subscribe(
      (data) => this.htmlContent = data,
      (err) => console.error(err)
    );
  }
}
