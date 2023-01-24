import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MAIL_URL } from 'src/app/core/mail-url.token';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  content: string = "";
  email: string = "";
  name: string = "";
  @ViewChild("thanksModal") thanksModal: TemplateRef<any> | undefined;


  constructor(private http: HttpClient, @Inject(MAIL_URL) private mail_url: string, private modalService: NgbModal) { }


  sendMail() {
    console.log("sendMail")
    this
      .http
      .post(`${this.mail_url}`, " Mail: " + this.email +  " Customer Name: " +this.name + " Content: " + this.content, { headers: this.headers(), responseType: 'text' })
      .subscribe((d) => this.openThanksModal());
    this.content = "";
    this.name = "";
    this.email = "";
  }

  headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'text/plain'
    };

    return new HttpHeaders(headersConfig);
  }

  openThanksModal() {
    this.modalService.open(this.thanksModal, { centered: true });
  }
}
