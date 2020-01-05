import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AngularMat";
  isActive = true;
  notifications = 0;
  showSpinner = false;
  opened = false;
  gSize = 0;
  intervalID: any;
  panelOpenState: false;
  step = 0;
  selectedValue: number;
  items = [{value: 'Angular'}, {value: 'React'}, {value: 'Vue'}];

  sandwichForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required, Validators.minLength(5)
    ]),
    price: new FormControl(null, [
      Validators.required, Validators.min(0)
    ])
  });
  email = new FormControl('', [Validators.required, Validators.email]);

  submit() {
    console.log(this.sandwichForm.value);
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  click() {
    console.log("test");
  }
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      console.log("fin");
      this.showSpinner = false;
    }, 3000);
  }
  log(state) {
    console.log(state);
  }
  changeGatterSize() {
    this.intervalID = setInterval(() => {
      if (this.gSize > 90) {
        clearInterval(this.intervalID);
        return;
      }
      this.gSize += 10;
      console.log('Size : ' + this.gSize);
    }, 1000);
  }
  loChangeTab(index: number) {
    console.log(index);
  }
  getValueInput() {
    console.log('the name :');
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
