import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   products=[
    {
      id:1,
      name:"Lopa",
      loc:"Kolkata",
      image:"/assets/laptop.jpeg",
      availability:'available',
      price:600000
    }
   ]
}
