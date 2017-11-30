import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  titleSize: number= 24;
  isColored: boolean = false;
  name: string;
  email: string;
  age: number;
  adress: Adress;
  hobbies: string[];
  country: string;
  countries: string[];
  dateOfBirth: Date = new Date(1988, 11, 7);
  savings: number = 50;
  familyName = 'abdallah';
  weight: number = 70;
  size: number = 175;

  constructor() {
    console.log('launched constructor');
    this.name = 'John Doe';
  }

  ngOnInit() {
    console.log('launched ngOnInit');
    this.name = 'Rene';
    this.email = 'rene.abd@gmail.com';
    this.age = 28;
    this.adress = {
      street: 'Nasipit Road',
      city: 'Cebu'
    }
    this.hobbies = ['basketball', 'music', 'chill'];
    this.countries = ['Lebanon', 'USA', 'Philippines'];
    this.country = this.countries[0];
  }

  addHobby(hobby: string) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

  increaseAge() {
    this.age++;
  }

  decreaseAge() {
    this.age--;
  }

}

interface Adress {
  street: string,
  city: string
}
