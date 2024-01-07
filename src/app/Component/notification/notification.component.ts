import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success " [hidden]="displayNotification"> <p>This website uses cookies for better user experience <button id="i1" (click)="showMe()">X</button> </p>   </div> <div> <div>',
  styles: ['.notification-div {margin: 10px 0px; padding:10px 20px; background-color:pink; text-align:center;} #i1{float:right;}']
})
export class NotificationComponent {
displayNotification:boolean=false;
showMe()
{
  if(this.displayNotification === true)
this.displayNotification=false;
else
this.displayNotification=true;

}
}
