import { Component, HostBinding, HostListener } from '@angular/core';
HostBinding
HostListener
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  visible: boolean = false;
  scrollbar: boolean = false;
  @HostBinding('class.tests')add=true;
  @HostListener('window:scroll') onScroll() {
    console.log(window.scrollY);
 const x=window.scrollY;


    if (x== 0) {
      console.log(x)
      console.log('hi');
      this.visible=false;
      this.scrollbar=true;
      document.getElementById('logo')?.classList.add('logo')

    } else {
      console.log('bye');
      this.scrollbar = false;
      document.getElementById('logo')?.classList.remove('logo')
    }

  }

}
