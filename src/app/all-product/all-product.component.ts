import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  allproduct:any=[]
  
  constructor(private api:ApiService){}

  ngOnInit(): void {
      this.api.getAllproductsapi().subscribe({
        next:(res:any)=>{
          this.allproduct = res
          console.log(this.allproduct);
          
        },
        error:(err:any) =>{
          console.error(`Error! ${err}`)
        }
      })
  }

  addToWishlist(product:any){
    if(localStorage.getItem("token")){
      alert('Proceed')
    }
    else{
      Swal.fire({
        title: "Oops..!",
        text: "Please Login to Continue",
        icon: "info"
      });
    }

  }

  addToCart(product:any){
    if(localStorage.getItem("token")){
      alert('Proceed')
    }
    else{
      Swal.fire({
        title: "Oops..!",
        text: "Please Login to Continue",
        icon: "info"
      });
    }

  }

}
