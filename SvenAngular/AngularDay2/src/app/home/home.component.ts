import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Array<{ image:string, brand: string, model:string,price: number }> = [

    {
      image:"https://i.auto-bild.de/mdb/extra_large/36/a7-a49.png",
      brand: "Audi",
      model:"A7",
      price: 32000
 
    },{
      image:"https://www.autotuning.de/wp-content/uploads/2017/08/mercedes-benz-cl500-amg-25-von-28-2000x1125.jpg",
      brand: "Mercedes",
      model:"CL500",
      price: 50000
    
    },{
 
      image:"https://cdn.motor1.com/images/mgl/m7k2v/s1/2022-kia-sportage.webp",
      brand: "Kia",
      model:"Sportage",
      price: 20000
 
    },{
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg/1200px-Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg",
      brand: "Honda",
      model:"Civic Type R",
      price: 55000
 
    },{
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Audi_A3_Sportback_35_TFSI_%288Y%29_%E2%80%93_f_02042021.jpg/640px-Audi_A3_Sportback_35_TFSI_%288Y%29_%E2%80%93_f_02042021.jpg",
      brand: "Audi",
      model:"A3",
      price: 15000
 
    },{
      image:"https://i.auto-bild.de/ir_img/2/4/9/0/7/3/4/Leistungskur-fuer-den-Ford-GT-560x373-be3e0502222b1520.jpg",
      brand: "Ford",
      model:"GT",
      price: 500000 
 
    },{
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Volvo_XC90_T8_AWD_Inscription_%28II%29_%E2%80%93_f_02042021.jpg/1280px-Volvo_XC90_T8_AWD_Inscription_%28II%29_%E2%80%93_f_02042021.jpg",
      brand: "Volvo",
      model:"XC 90",
      price: 80000
 
    },{
      image:"https://upload.wikimedia.org/wikipedia/commons/e/e9/2016_BMW_i8.jpg",
      brand: "BMW",
      model:"i8",
      price: 140000
 
    },{
      image:"https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.webp",
      brand: "Lamborghini",
      model:"Aventador",
      price: 400000
 
    },
 
   ];
  constructor() { }

ngOnInit() {

}


}
