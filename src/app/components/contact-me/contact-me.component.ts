import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  name : String = "Olawale Alex-oni";
  location : String = "Lawndale, California"
  phonenumber : number =3107065903;
  email : String = "olawalealexoni@gmail.com";
  linkedin : String = "https://www.linkedin.com/in/olawale-alex-oni/";
  github : String = "https://github.com/gbugsy1x";



}
