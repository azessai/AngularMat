import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DateAdapter, MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DialogExempleComponent } from './dialog-exemple/dialog-exemple.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularMat';
  isActive = true;
  notifications = 0;
  showSpinner = false;
  opened = false;
  gSize = 0;
  intervalID: any;
  panelOpenState: false;
  step = 0;
  selectedValue: number;
  items = [{ value: 'Angular' }, { value: 'React' }, { value: 'Vue' }];
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular material' },
    { name: 'React' },
    { name: 'Vue' }
  ];

  sandwichForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(5)
    ]),
    price: new FormControl(null, [Validators.required, Validators.min(0)])
  });
  email = new FormControl('', [Validators.required, Validators.email]);
  myControl = new FormControl();
  filtredOptions: Observable<string[]>;
  choosedRadio: string;
  datePicker: Date;
  minDate = new Date(2020, 0, 10);
  maxDate = new Date(2021, 0, 29);
  startDate = new Date(2020, 0, 15);
  numbers = [];
  constructor(private dateAdapter: DateAdapter<Date>, private snackBar: MatSnackBar, private dialog: MatDialog) {

    for (let index = 0; index < 1000; index++) {
      this.numbers.push(index);
    }
  }

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
    console.log('test');
  }
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      console.log('fin');
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
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
  ngOnInit() {
    this.filtredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.dateAdapter.setLocale('es');
    this.dateAdapter.getFirstDayOfWeek = () => {
      return 1;
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter( option =>
      option.toLowerCase().includes(filterValue)
    );
  }
  dateFilter = date  => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  openSnackBar(message: string, action) {
    const openSnackBarRef = this.snackBar.open(message, action, {duration: 2000});
    openSnackBarRef.afterDismissed().subscribe(() => {
      console.log('Dismiss');
    });
    openSnackBarRef.onAction().subscribe(() => {
      console.log('action');
    });
  }
  openCustumSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }

  openDialog(){
    const openDialogRef = this.dialog.open(DialogExempleComponent, {data: {name: 'Azeddine'}});
    openDialogRef.afterClosed().subscribe(result => {
      console.log('result :' + result);
    })
  }
}
@Component({
  selector: 'app-custum-snackbar',
  template: `<span style='color: orange'>Custum SnackBar</span>`
})
export class CustomSnackBarComponent {}
