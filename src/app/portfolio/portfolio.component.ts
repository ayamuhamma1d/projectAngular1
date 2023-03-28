import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { SecData } from '../sec-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgDetail: SecData[] = [
    { imgUrl: './assets/img/cabin.png', title: 'LOG CABIN' },
    { imgUrl: './assets/img/cake.png', title: 'TASTY CAKE' },
    { imgUrl: './assets/img/circus.png', title: 'CIRCUS TENT' },
    { imgUrl: './assets/img/game.png', title: 'CONTROLLER' },
    { imgUrl: './assets/img/safe.png', title: 'LOCKED SAF' },
    { imgUrl: './assets/img/submarine.png', title: 'SUBMARINE' },
  ];
  show: boolean = false;
  item: SecData = { imgUrl: './assets/img/cabin.png', title: 'LOG CABIN' };


  handleModelClick(event: Event, model: any) {
    if (event.target == model) {
      this.show = false;
    }
  }
}


























































































  // visible: boolean = false;
  // closeBtn:boolean=false;
  // preview: any ="./assets/img/cabin.png";
  // titleData:string="";
  // title: string[] = ['LOG CABIN', 'TASTY CAKE', 'CIRCUS TENT', 'CONTROLLER', 'LOCKED SAFE','SUBMARINE']
  // imgSrc: string[] = ['./assets/img/cabin.png', './assets/img/cake.png', './assets/img/circus.png', './assets/img/game.png', './assets/img/safe.png','./assets/img/submarine.png']
  // imgDetails: SecData[] = [{ imgUrl: './assets/img/cabin.png', title: 'LOG CABIN' },
  //  { imgUrl: './assets/img/cabin.png', title: 'LOG CABIN' },
  //   { imgUrl: './assets/img/cake.png', title: 'TASTY CAKE' },
  //   { imgUrl: './assets/img/circus.png', title: 'CIRCUS TENT' },
  //   { imgUrl: './assets/img/game.png', title: 'CONTROLLER' },
  //   { imgUrl: './assets/img/safe.png', title: 'LOCKED SAF' },
  //   { imgUrl: './assets/img/submarine.png', title: 'SUBMARINE' },];
//   click(): void{
// this.closeBtn=!this.closeBtn;
//     this.visible = !this.visible;
//   }
//   display(index: number) {
//     this.preview=this.imgSrc[index];
//     this.titleData=this.title[index]
//     this.visible = true;
//     console.log(this.preview);


//   }


//   handleModelClick(event:Event,model:any) {
//     if(event.target== model){
//       this.visible = false;
//     }
//   }










