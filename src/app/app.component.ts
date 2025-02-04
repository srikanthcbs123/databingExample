import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //1.Interpoliation Binding
  // Syntax: {{propertyName}}
  // • It displays the value of the property in the template.
  // • When the value of the property is changed, the same value will be automatically updated
  // in the template.

  //synatx:Propertname:datatype=value;
  title: String = 'Hello Team'; //this is one property
  CompanyName: string = 'Microsoft';
  age: number = 20;
  isresult: boolean = true;
  facebookAddress: string = 'https://www.facebook.com/';
  Firstname: string = 'JNTU COLLEAGE';
  gender: string = 'Female';
  Country: string = 'India';
  CountryName:string='';
  Cities:string[]=["newdelhi","newyork","newyear","chenni","vizag","Australia"]; //string array
  ChangedDataValues() {
    debugger;
    alert('button clicked');
    this.title = 'AMERICA';
    this.CompanyName = 'AMAZON';
    this.age = 100;
    console.log(this.title);
    console.log(this.CompanyName);
    console.log(this.age);
  }

  marks: number = 40;
  mycolor: string = ' ';
  myclass: string = ''; //this is for ngclass section used
  b: boolean;
  constructor() {
    //this is the constructor ,whenever this component loads automatically it will also load.
    if (this.marks >= 35) {
      this.mycolor = 'green'; //here i am assiging green color directly
      this.myclass = 'class1';
      this.b = true;
    } else {
      this.mycolor = 'red';
      this.myclass = 'class2';
      this.b = false;
    }
  }
}
