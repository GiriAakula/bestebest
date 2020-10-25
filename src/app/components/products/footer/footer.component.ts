import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
