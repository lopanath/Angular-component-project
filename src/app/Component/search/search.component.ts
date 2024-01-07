import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  val:string="";
  //msg:string="";
 flag:boolean=false;
  changeSearchValue(eventData: Event)
  {
    console.log((<HTMLInputElement> eventData.target).value);
    this.val=(<HTMLInputElement> eventData.target).value;
    
    // if(this.val==="")
    //   this.msg="";
    //   else
      
    //    this.msg="You are searched for"+this.val;
    if(this.val === "")
       this.flag=false;
    else
      this.flag=true;
      
  }
  
}
