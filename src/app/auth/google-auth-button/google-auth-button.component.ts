import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';


const googleLogoURL =
  "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-google-auth-button',
  templateUrl: './google-auth-button.component.html',
  styleUrls: ['./google-auth-button.component.scss']
})
export class GoogleAuthButtonComponent implements OnInit {



  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private auth: AuthService) {
    this.matIconRegistry.addSvgIcon(
      "google-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }

  ngOnInit() {
  }

}
