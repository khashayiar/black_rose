import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'black_rose';

//   car: {
//     type:string, name:string, color:string, km:number, year:number } =
//     {
//     name:"arash",
//     type:"134534",
//     color:"red",
//     km:50000,
//     year:20,
//
// }
//
// users : {name:string , phone:string, address:string, photo:string, age:number } [] =[
//   {
//     name: "string",
//     phone: "string",
//     address: "string",
//     photo: "string",
//     age: 25
//   },
//   {
//   name: "string",
//   phone: "string",
//   address: "string",
//   photo: "string",
//   age: 25
//
//   }
//   ]
//
//   products:{name:string, image:string, price:number, type:string, row:string, color:string}[]=[
//     {
//       name:"arash",
//       image:"",
//       price:20000000,
//       type:"type",
//       row:"row",
//       color:"black"
//     },
//     {
//       name:"arash",
//       image:"",
//       price:20000000,
//       type:"type",
//       row:"row",
//       color:"white"
//     }
//
//   ]
//
//   product:{name:string, image:string, color:{name:{test1:string,test2:string},hex:string}, type:string, row:string, color:string}[]=[
//     {
//       name:"arash",
//       image:"",
//       color:[{name:{test1:""}}],
//       type:"type",
//       row:"row",
//       color:"black"
//     },
//     {
//       name:"arash",
//       image:"",
//       price:20000000,
//       type:"type",
//       row:"row",
//       color:"white"
//     }
//
//   ]
//
//
//
// }
  // name     : string   = "black_rose";
  // lastName : string   = "1010101";
  // education: boolean  =  true   ;
  // number   : string   = "09906319090" ;
  // email    : string    = 'black_rose@gmail.com' ;
  // what     : number   =  63564 ;
  // /////////////////////////////////////
  // blackRose: string [] = [ "arash", "black_rsoe", "khashayiar"];
  // arash    : number [] = [1,2,3,4,45,5,6,6,7,89,0]

//       students:{name:string, phoneNumber:string, are:boolean ,age:number}[]=[
//         {
//       name  :"arash",
//       phoneNumber : "099074545345",
//       are : true,
//       age: 20
// },
// {
//   name  :"arash",
//   phoneNumber : "099074545345",
//   are : true,
//   age: 20
// }
// ]
  /*  title1: {
      type: string, name: string, color: string, km: number, year: number
    } =
      {
        name: "arash",
        type: "134534",
        color: "red",
        km: 50000,
        year: 20,

      }

    images: { name: string, phone: string, address: string, photo: string, age: number } [] = [
      {
        name: "string",
        phone: "string",
        address: "string",
        photo: "string",
        age: 25
      },
      {
        name: "string",
        phone: "string",
        address: "string",
        photo: "string",
        age: 25

      }
    ]

    sections: { name: string, image: string, price: number, type: string, row: string, color: string }[] = [
      {
        name: "arash",
        image: "",
        price: 20000000,
        type: "type",
        row: "row",
        color: "black"
      },
      {
        name: "arash",
        image: "",
        price: 20000000,
        type: "type",
        row: "row",
        color: "white"
      }

    ]


    sections1: {
      name: string,
      image: string,
      color: { name: { test1: string, test2: string }, hex: string }[],
      type: string,
      row: string,
      price: number
    }[] = [
      {
        name: "arash",
        image: "image",
        color: [{name: {test1: "string1", test2: "string2"}, hex: "#123456"}],
        type: "type",
        row: "row",
        price: 20000000,
      },
      {
        name: "arash",
        image: "image",
        color: [{name: {test1: "string1", test2: "string2"}, hex: "#789012"}],
        type: "type",
        row: "row",
        price: 20000000,
      }
    ];


    sections2: { name: string, lastname: string, color: string, age: number, row: string, year: number, }[] = [
      {
        name: "arash",
        lastname: "black_rose",
        color: "black",
        age: 22,
        row: "207",
        year: 2024


      },
    ];

    Store: {
      name: string,
      image: string,
      icons: string,
      color: string,
      color2: string,
      send: string,
      iphone_model: string,
      story: number,
      star: number,
      Price: number,
      currency: string,
    }[] = [

      {
        name: "iphone",
        color: "black",
        color2: "blue",
        image: "iphone13",
        icons: "car_red",
        send: "send_free",
        iphone_model: "iphone_13",
        story: 111,
        star: 4.5,
        Price: 36900000,
        currency: "تومان",
      },

    ];
    image: string, title: string, rate: string, price: number,
    freeSend: boolean, exist: boolean, sendToday: boolean
  }[] = [
    {
      image: "https://",
      title: "iphone 13",
      rate: "4.5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    },
    {
      image: "https://",
      title: "iphone 14",
      rate: "5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    }
  ];

  products: {
    image: string, title: string, rate: string, price: number,
      freeSend: boolean, exist: boolean, sendToday: boolean
  }[] = [
    {
      image: "https://",
      title: "iphone 13",
      rate: "4.5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    },
    {
      image: "https://",
      title: "iphone 14",
      rate: "5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    }
  ];*/

  product: {
    images: string[], category: string, title: string, subTitle: string,
    rate: string, sellLength: number, comment: number, qAndA: number,
    suggested: { Percent: string, length: number },
    colors: { name: string, hex: string }[],
    seller: {
      name: string, percent: string, warranty: string, price: number,
      freeSend: boolean, exist: boolean, sendToday: boolean, digiClubRate: string
    }[],
    insurance: {
      name: string, price: number, discountPrice: number,
      discountPercent: number
    }[],
    features: {
      key: string, value: string[]
    }[],
  } = {
    images: ["https://", "https://"],
    category: "اپل / گوشی موبایل اپل",
    title: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    subTitle: "Apple iPhone 13 CH Dual SIM 128GB And 4GB RAM Mobile Phone - Not Activate",
    rate: "4.5",
    sellLength: 3364,
    comment: 5998,
    qAndA: 1808,
    suggested: {
      Percent: "92%",
      length: 999
    },
    colors: [
      {name: "مشکی", hex: "#000000"},
      {name: "سفید", hex: "#ffffff"},
      {name: "آبی", hex: "#0e2efd"}
    ],
    seller: [
      {
        name: "دیجی‌کالا",
        percent: "88.6%",
        warranty: "گارانتی ۱۸ ماهه شرکتی",
        price: 36850000,
        freeSend: true,
        exist: true,
        sendToday: true,
        digiClubRate: "150"
      }
    ],
    insurance: [
      {
        name: "بیمه تجهیزات دیجیتال - بیمه پارسیان",
        price: 1205540,
        discountPrice: 602770,
        discountPercent: 50
      }
    ],
    features: [
      {
        key: "فناوری صفحه‌ نمایش",
        value: ["Super Retina XDR OLED"]
      },
      {
        key: "رزولوشن عکس",
        value: ["12 مگاپیکسل"]
      }
    ]
  }

  // arash1 = ["ali","amir","test"]
  // ngOnInit(){
  //   for (let names of this.arash1) {
  //     console.log(names);
  //   }
  //   for (let i = this.arash1.length - 1; i >= 0; i--){
  //     console.log(this.arash1[i]);
  //   }
  //
  //   for (let i = 0; i < this.arash1.length; i++) {
  //     let string = this.arash1[i]
  //     console.log(string);
  //   }
  // }



  arash2 = ["ali","amir","test"]
  ngOnInit(){
    this.arash2.forEach((item: any, index:any)=>{
      console.log(item);
      console.log(index);

      });

    for (let names of this.arash2) {
      console.log(names);
    }
    for (let i = this.arash2.length - 1; i >= 0; i--){
      console.log(this.arash2[i]);
    }

    for (let i = 0; i < this.arash2.length; i++) {
      let string = this.arash2[i]
      console.log(string);
    }
  }



}


  //
  // age1: number = 24;
  //
  // checkAge1(){1
  //   if (this.age1 >= 18 && this.age1 < 30) {
  //     console.log("up To 18");
  //   }else {
  //     console.log("under 18");
  //   }
  // }
  //
  // age2: number = 24;
  //
  // checkAge2(){
  //   if (this.age2 > 18 && this.age2 < 30) {
  //     console.log("up To 18");
  //   }else {
  //     console.log("under 18");
  //   }
  // }
  //
  //
  //
  // name :string = "arash";
  // printName(){
  //   console.log(this.name);
  // }
  // ngOnInit() {
  //   this.printName();
  // }

// arash = ["ali","amir","test"]
//   ngOnInit(){
//     for (let string of this.arash) {
//       console.log(string);
//     }
//     for (let i = 0; i < this.arash.length; i++) {
//       let string = this.arash[i]
//       console.log(string);
//     }
//   }

/////////////////////////////////










  // age1: number = 24;
  //
  // checkAge1(){1
  //   if (this.age1 >= 18 && this.age1 < 30) {
  //     console.log("up To 18");
  //   }else {
  //     console.log("under 18");
  //   }
  // }
  //
  // age2: number = 24;
  //
  // checkAge2(){
  //   if (this.age2 > 18 && this.age2 < 30) {
  //     console.log("up To 18");
  //   }else {
  //     console.log("under 18");
  //   }
  // }
  //
  //
  //
  // name :string = "arash";
  // printName(){
  // console.log(this.name);
  // }
  // ngOnInit() {
  //   this.printName();
  // }
  //
  //
  //
  //
  //




