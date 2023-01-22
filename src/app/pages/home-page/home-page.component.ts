import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

 sendMail() {
  console.log("Mail send start");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + btoa('936eb334c9c52beefd5eebaf4de0a737'+":" +'54a8b2212b7fd9100901674df714199a'));
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "admin@softwareridersberlin.de", "Name": "Admin"},
        "To": [{"Email": "admin@softwareridersberlin.de", "Name": "Admin"}],
        "Subject": "Drop Us A Line",
        "TextPart": "Test"
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
