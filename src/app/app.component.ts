import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  affichage = 0;

  clickOnPad = function(char) {

    if(char == "=") this.affichage = eval(this.affichage);
    else if(char == "C") this.affichage = 0;
    else if (this.affichage == 0) this.affichage = char;
      else this.affichage += char;
  }

}
