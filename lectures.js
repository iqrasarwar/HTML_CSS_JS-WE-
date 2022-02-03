// alert("AOA PAKISTAN from external!");
// console.log("AOA PAKISTAN0");

// document.getElementById("p1").innerHTML = "new text";

// //var in js
// //1 //var allow re declaration of variables
// //alow unintiallized
// var x= "iqra";
// console.log(x);
//  var x=10;
// console.log(typeof(x));
// //2 in es16 //let don't allow the re declaration of the variable allow resign thouh
// //allow unitiallized
// let y = 20;
// console.log(y);
// y=true;
// // let y =0; error
// console.log(y);
// //3
// //must initallize
// const z = 0;
// console.log(z);
// // z=10; error don't allow reassign too. also redeclare is not allowed
// //let z = 10; error
// console.log(typeof(z));
// //new line in js???????????????????????????????????????????????????????????????????????????
// //defer don;t allow to write on documnet
// document.write(x+'\n');
// document.writeln(y+'\n');
// document.write(z);

//COMPARISONS
// let x = 1;
// let y = "1";
// let z = "mahnoor";
// //compare value only ==
// var a = x==y;
// console.log(a);
// //compare value and types ===
// var a = x===y;
// console.log(a);


// //DATA TYPES
// //number string boolean array
// //array
// var myArray = [1,2,3,4];
// console.log(myArray)
// var book = ["Laiba Kammal"];
// console.log(book)

// //object
// var book1={title:'Book Title', year:1985};
// console.log(book1);
// document.write(myArray+" "+book+" "+book1);

// function f1()
// {
//    alert("nimra is CHOZIII");
// }
// var count = 0;
// function f2()
// {
//    count = count + 1;
//    var before =  "Click me to inc the count : ";
//    document.getElementById("d1").innerHTML= before + count;
// }

// var b = document.getElementById("b");
// function f3()
// {
//    b.value = parseInt(b.value)+1;
// }

//SCOPE IN JS
//function global and block scope today
//before 2015 function and block scope exist only
//block scope for let and scope
// //var is not of block scope
// {
//    let x = 0;
// }
// console.log(x);
//error Uncaught ReferenceError: x is not defined
   //  at script.js:84
   //  (anonymous) @ script.js:84
   //NO ERROR METHOD BELOW
   // {
   //    var x = 0;
   // }
   // console.log(x)
   //ONCLICK IN BUTTON
// function f1()
// {
//    document.getElementById("b1").innerHTML=1;
// }
//EVENT LISTNER
// let d = document.getElementById("b1");
// // // d.addEventListener('click',f);
// //PORERTY
// // function f()
// // {
// //    console.log("clicked");
// // }
//  d.onclick = f1;
// //this -> who fired event
// function f1()
// {
//    alert(this);
//    console.log(this);
// }

// 1st parameter in function --> receive event object

// function f1(e)
// {
//    alert(this);
//    console.log(e.type);
//    // document.write(document.getRootNode+ e);
// }
//to inner from outer   capturing
//to outer from inner   bubling

// // REGULAR FUNCTION
// function add(a,b)
// {
// return a+b;
// }
// console.log(add(4,5));
// // ARROW SYNTAX
// let sum = (a,b) =>
// {
//    return a+b;
// }
// console.log(sum(4,5));
// //ananymus
// let x = function(a,b)
// {
// return a+b;
// }
// console.log(x(4,5));

// //LET AND VAR behave same for functions as they does for variables

// var sum = (a,b) => a+b;  //SHORTER SYNTAX
// //FOR 1 PARAMETER
// var sum = a => a+a;

// //FOR 0 parameters
// var sum = () => console.log('aoa pak');

// document.write(sum)

// //behavoiur of this in arrow function and regular function is different

//by regular
// var d = document.getElementById("b2");
// function f()
// {
// console.log(this);
// }
// // window.onload = f;
// // console.log(f());
// //by arrow
// //by regular
// // var d = document.getElementById("b2");
// let sum = () => console.log(this);
// // d.onclick = sum;
// // window.onload = sum;
// //arrow function gets the parent object
// //dom api to get parent to traverse
// sum();
// f();
// //ADD ELEMETS BY JS
// let x = document.createElement('p');
// let y = document.createTextNode("This is p element added by js");
// let z = document.createAttribute("id");
// let d = document.getElementById("d1");
// d.appendChild(x);
// x.appendChild(y);
// x.setAttributeNode(z);
// z.value="jsid";
// let xx = document.createElement('h1');
// let yx = document.createTextNode("This is p element added by js");
// let zx = document.createAttribute("id");
// d.appendChild(xx);
// xx.appendChild(yx);
// xx.setAttributeNode(zx);
// zx.value="JS";

// let xz = document.body;
// document.write(xz.innerText+x.innerHTML);

//PARAMS LIKE KEYWORD
// function f()
// {
// console.log(arguments[0])
// }
// f(11,2);
// var x;
// console.log(x==f(1));
//to call it by it self
// (  function sum()
//    {
//       console.log("function call");
//    })();

//OBJECTS

// let person = {};
// console.log(person);
// let person2 =
// {
//    firstName: 'iqra',
//    lastName : 'sarwar',
//    'postal code':54000,
//    sayHi:function()
//    {
//       console.log("say hi method");
//    },
//    //ES6 WAY OF ADDING METHOD
//    say()
//    {
//       console.log("saymethod");
//    }
// }
// console.log(person2);
// console.log(person2.lastName);
// console.log(person2['lastName']);
// //if key name contains a space we can't use space use array notation instead
// //console.log(person2.postal code) //ERROR!
// console.log(person2['postal code']);
// person2.rollNo = 'bsef19m012';
// console.log(person2);
// delete person2['postal code'];
// console.log(person2);
// console.log(person2.sayHi);
// person2.sayHi();
// person2.sayHello = function (){
// console.log("say hello method");
// }
// person2.sayHello();
// person2.say();
// person2.sayAOA = sayAOA1;
// function sayAOA1()
// {
// console.log("say aoa");
// }
// person2.sayAOA();
// console.log(person2);
// person2 = null;
// console.log(person2);


// // FACTORY PATTREN ///to create new multiple objects we don't need to create multiple variables and objs etc
// // factory pattren can provide us multiple objects;

// let p = new Object(); //a new object created

// //factory pattren

// function createPerson(n,a)
// {
//    let p = new Object();
//    p.name = n;
//    p.age = a;
//    return p;
// }

// let x = createPerson('iqra sarwar', 'xx');
// console.log(x);
//factory pattren uses obj to create obj type is not identified
//CONSTRUCTOR PATTREN

function student(n,a)
{
   this.name = n;
   this.age = a;
   this.sayName = function ()
   {
      console.log(this.name);
   }
}

// let ss = new student();
// console.log(ss);

let s = new student('iqra','xx');
let s2 = new student('sarwar','xxx');
// //false for both even the name value is same.
// console.log(s.sayName === s2.sayName);
// console.log(s.sayName == s2.sayName);
//  //functions are instansiated for the different objects of the function differently. memory consupmtion
//  // to avoid it we can define the function before and assign name in the function
//   //its drawback is that global space is disturbed.

// console.log(s);
// console.log(typeof(s));

console.log(s instanceof student);  //true

s.sayName();
/*
class student {
   constructor(n, a) {
      this.name = n;
      this.age = a;
      this.sayName = function () {
         console.log(this.name);
      };
   }
}*/

function f1()
{
   console.log(this.name);
}

function student1(n,a)
{
   this.name = n;
   this.age = a;
   this.sayName = f1;
}

let s3 = new student1('iqra','xx');
let s4 = new student1('sarwar','xxx');

console.log(s3.sayName == s4.sayName);

function student2(n,a)
{
   this.name = n;
   this.age = a;
   student2.prototype.sayName = function()
   {
      console.log(this.name);
   }
}
let s5 = new student2('iqra','xx');
let s6 = new student2('sarwar','xxx');

console.log(s5.sayName == s6.sayName);


// functions become the same for all of the instances of the student. but properties are still different for different objets.
// to make a property shared we make it with prototype then if we change at any one place all of itas instances are changed.
// prototype conatinsa the shared asseets of the constructor pattren.


function stu(n,a,c)
{
   this.name = n,
   this.age = a,
   stu.prototype.city = c;
   stu.prototype.printCity = function ()
   {
      console.log(this.city);
   }
}

let s = new stu("iqra","xx","lahore");
console.log(s);
s.printCity();
let s1 = new stu("iqra","xx","karachi");
//s1.prototype.city = 'xzy';
s1.city = 'xyz';
s1.printCity();
console.log(s1);
console.log(s);
s.printCity();
stu.prototype.city = 'okara';
s1.printCity();
console.log(s1);
console.log(s);
s.printCity();
var x;
console.log(x);
