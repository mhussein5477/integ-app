import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../bootstrap/css/style.min.css']
})
export class AppComponent {
  
  myImage :string = "assets/images/smart_logo.jpg";
  alertRoute =  "alert";
  mappingRoute = "mapping";
  claimcountRoute = "claimcount";

}
