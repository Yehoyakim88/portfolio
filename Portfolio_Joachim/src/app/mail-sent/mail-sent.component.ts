import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-sent',
  templateUrl: './mail-sent.component.html',
  styleUrls: ['./mail-sent.component.scss']
})
export class MailSentComponent {

  closeInfo() {
    let mainWindow = document.getElementById('main');
    mainWindow?.classList.add('d-none');
  }
}
