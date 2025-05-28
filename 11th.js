// const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// class toyotacar {
//     constructor(brand, milage){
//         console.log("A new object is created");
//         this.brand = brand;
//         this.milage=milage;
//     }
//     start(){
//         console.log("Car started");
//     }
//     stop(){
//         console.log("Car stopped");
//     }

    
// }

// let fortuner = new toyotacar("fortuner",10);
// console.log(fortuner);
// let lexus = new toyotacar("lexus",20);
// console.log(lexus);


// class parent{
//     printp(){
//         console.log("This is parent class");
//     }
// }


// class child extends parent{
//     printc(){
//         console.log("This is child class");
//     }
// }

// let c = new child();
// c.printc();
// c.printp();



// class person{
//     constructor(name){
//         this.species="homosepiens";
//         this.name=name;
//         console.log("I am a person");
//     }
//     eat(){
//         console.log("Eating");
//     }
//     sleep(){
//         console.log("Sleeping");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class student extends person{
//     constructor(name){
//         super(name);
//         console.log("I am a student");
//     }
//     study(){
//         console.log("Studying");
//     }
// }

// class doctor extends person{
//     constructor(branch){
//         super();
//         this.branch = branch;
//         console.log("I am a doctor");
//     }
//     work(){
//         super.eat();
//         console.log("Treating patients");
//         super.sleep();
//     }
// }

// let s= new student();
// // s.sleep();
// // s.eat();
// // s.study();

// let d= new doctor("Cardiology");
// // d.sleep();
// d.work();



let data ="secrete information";

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", data);
    }
}

let student=new user("Vivek","vivekmengade@gmail.com");
let student2=new user("Amruta","amrutamengade@gmail.com");

let teacher1=new user("Sanjay","sanjay@gmail.com");



class admin extends user{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        data = "new secrete information";
    }
}


let admin1=new admin("admin","admin@collage.com");