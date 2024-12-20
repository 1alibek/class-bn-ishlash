// const hour = document.querySelector(".hour");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");
// function uiTime() {
//   let date = new Date();
//   hour.innerHTML =
//     date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
//   minutes.innerHTML =
//     date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
//   seconds.innerHTML =
//     date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
// }
// setInterval(uiTime,1000)


//////////////////////////////////////////class bilan ishlash////////////////////////////////////////////////////
// class Home {
//   constructor(width,heigth,people,color){
//     this.width=width
//     this.heigth=heigth
//     this.people=people
//     this.color = color;
//   }
//   about(){
//     return `Uyning eni ${this.width/100}m va uyning boyi ${this.heigth/100}m rangi esa ${this.color==='black'?'qora':'qizil'}`
//   }
//   kv(){
//     const h=this.heigth/100
//     const w = this.width / 100;
//     return `${w*h}kv`
//   }
// }
// const home1 = new Home(220, 3000, 5, "black");
// const home2 = new Home(550, 7000, 57, "red");
// console.log(home1.about());
// console.log(home2.about());
// console.log(home1.kv());
// console.log(home2.kv());


// class Uchaska extends Home{
//   constructor(width,heigth,people,color,garden,price){
//     super(width, heigth, people, color);
//     this.garden=garden
//     this.price = price;
//   }
//   priceSum(){
//     let sum =12900
//     return`${Math.round(this.price*sum)} so'm`
//   }
//   about(){
//     return(
//       super.about()+`Uyning narxi ${this.priceSum()} va uning bogi ${this.garden} s`
//     )
//   }
// }

// const uchaska1 =new Uchaska(240,300,4,'red',2,40000)
// const uchaska2 =new Uchaska(980,7500,4,'black',8,450000)
// console.log(uchaska1);
// console.log(uchaska2);
// console.log(uchaska1.priceSum());
// console.log(uchaska2.priceSum());
// console.log(uchaska1.about());
// console.log(uchaska2.about());
// console.log(home1 instanceof Home);



//////////////////////////////////////////login parol ozgaritish////////////////////////////
// class User {
//   username;
//   #password;
//   constructor(username, password) {
//     this.username=username
//     this.#password = password;
//   }
//   set changePassword([password,newPassword]){
//     if(password===this.#password){
//       this.#password=newPassword
//       console.log(`Passwordingiz o'zgartirildi yangi pasword ${newPassword}`);
      
//     }else{
//       console.log('parol xato');
      
//     }
//   }
//   set getUser([username,password]){
//     if (username===this.username&&password===this.#password) {
//       console.log(`Xush kelibsiz Sizning loginingiz ${this.username} parolingiz ${this.#password}`);
      
      
//     }else{
//       console.log('Sizning login yoki parolingiz xato');
      
//     }
//   }
// }

// const user1 =new User('olimjon0101','1234olim')
// user1.changePassword=['1234olim','olimjon1111']
// user1.getUser = ["olimjon0101", "olimjon1111"];

/////////////////////////////////////////////////////bank pul olsih qowiw////////////////


// class Bank{
//   owner;
//   balance;
//   constructor(owner,balance){
//     this.owner=owner
//     this.balance = balance;
//   }
//   addBalance(newsum){
//     this.balance+=newsum
//     return `Sizning balansingiz ${newsum} ga toldirildi hozirgi balance ${this.balance} so'm`
//   }
//   useBalance(usesum){
//     if(usesum>this.balance){
//       return `balansizgizda yetarli mablax yoq`
//     }
//     this.balance-=usesum
//     return `sizning balansizgizdan ${usesum} som yechib olindi qolgan pul ${this.balance}`

//   }
// }
// const bank1 = new Bank("Ali", 1000000);
// const bank2 = new Bank("Alibek", 4000000);
// console.log(bank1.addBalance(5000000));
// console.log(bank2.addBalance(5000000));
// console.log(bank1.useBalance(5000000));
// console.log(bank2.useBalance(5000000));




class User {
  username;
  email;
  role;
  constructor(username,role, email) {
    this.username = username;
    this.email = email;
    this.role = role;
  }
  getInfo(){
    return ` Men ${this.username} ismli shaxs ${this.role}man meing email manzilim ${this.email}`
  }
}
const user1 =new User ('ali','student','ali@gmail.com')
console.log(user1.getInfo());
