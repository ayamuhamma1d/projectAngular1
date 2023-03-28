import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  searchName:string = "";
  searchEmail:string = "";
  searchPhone:string ="";
  message:string ="";
  show:boolean = true;
  show1:boolean = true;
  show2:boolean = true;
  show3:boolean = true;
  show4:boolean = true;
  label:boolean=false;
  label2:boolean=false;
  label3:boolean=false;
  label4:boolean=false;

  validName(searchName:string){
    console.log(this.searchName);
    let regex = /^[a-zA-Z ]+$/;
    return regex.test(searchName);

  }
  validEmail(searchEmail: string) {
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(searchEmail);
  }

  validPhone(searchPhone: string) {
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    return regex.test(searchPhone);
}

  validMessage(message: string) {
    let regex = /^[a-zA-Z ]+$/;
    return regex.test(message);
}
check(){
  console.log('kko');

if(this.searchName==""&&this.searchPhone==""&&this.searchPhone==""&&this.message==""){
  console.log("empty");
  this.show=true;
  this.show1=true;
  this.show2=true;
  this.show3=true;
  this.show4=true;
}

if (this.validName(this.searchName) == true && this.validPhone(this.searchPhone) == true && this.validEmail(this.searchEmail) == true && this.validMessage(this.message) == true){
    this.show = true;
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
    this.show4 = true;

}

}
checkName(){
  if (this.validName(this.searchName) == true){
    this.show1 = true;
  } else { this.show1 = false;
    }
}
  keyUpLabel() {
    this.label = true;
  }
  clickLabel() {
    this.label = false;
  }
  keyUpLabel2() {
    this.label2 = true;
  }
  clickLabel2() {
    this.label2 = false;
  }
  keyUpLabel3() {
    this.label3 = true;
  }
  clickLabel3() {
    this.label3 = false;
    console.log('ihrfoighrfbfbr');

  }
  keyUpLabel4() {
    this.label4 = true;
  }
  clickLabel4() {
    this.label4 = false;
  }
 checkEmail(){
  if (this.validEmail(this.searchEmail) == true){
    this.show2 = true;
  } else { this.show2 = false;this.show=true; }
}
 checkPhone(){
  if (this.validPhone(this.searchPhone) == true){
    this.show3 = true;
  } else { this.show3 = false; }
}
 checkMessage(){
   if (this.validMessage(this.message) == true){
    this.show4=true;
  }
  else { this.show4 =false;
  }
}
emptyName(){
  if (this.searchName ==""){
    this.show1 = false;
    this.clickLabel()
  }
}
emptyEmail(){
  if (this.searchEmail ==""){
    this.show2 = false;
    this.clickLabel2();
  }

}
emptyPhone(){
  if (this.searchPhone ==""){

    this.show3 = false;
    this.clickLabel3();
  }

}
emptyMessage(){
  if (this.message ==""){
    this.show4 = false;
    this.clickLabel4();
  }
}

  empty1() {
    if (this.searchName == "") {
      this.clickLabel();
    }}
  empty2() {
    if (this.searchEmail == "") {
      this.clickLabel2();
    }}
  empty3() {
    if (this.searchPhone == "") {
      this.clickLabel3();
    }}
  empty4() {
    if (this.message == "") {
      this.clickLabel4();
    }}

}

// validName(searchName: string) {
//   console.log(this.searchName);
//   let regex = /^[a-zA-Z ]+$/;
//   return regex.test(searchName);

// }
// x = this.validName(this.searchName);
// check(){
//   if (this.validName(this.searchName) == true) {
//     console.log('true');
//     this.show = true;

//   } else {
//     console.log('false');
//     this.show = false;
//   }
// }
