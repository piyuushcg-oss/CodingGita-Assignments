// $$$$$$    PART: 1   $$$$




// //  Question-1
// var name ="Piyush";
// var age=18;
// var city="Ambedkar Nagar";
// console.log(name)
// console.log(age)
// console.log(city)



// // question-2
// var score=50;
// var score=80;
// console.log(score)



// // question-3
// const PI=3.14
// console.log(PI)



// // question-4
// // case-1
// var num1
// console.log(num1)
// let num2
// console.log(num2)

// // case-2
// var num1=12
// console.log(num1)
// let num_2=12
// console.log(num_2)


// // question-5
// var studentName="Mohit"
// var marks=23
// var schoolName="xyz public school"
// console.log(studentName)
// console.log(marks)
// console.log(schoolName)





// // question-6
// if(true){
//     var name1="dsss"
//     let name2="dsdsds"
//     const age=12
// }
// console.log(name1)
// console.log(name2)
// console.log(age)


// obessr:- var give value outside the block
            // let and const does not give the value outside the block





// question-7
 
// var name="piff"
// var name="devev"
// console.log(name)


// let name="dddd"
// let name="ssdds"
// console.log(name)

//  here var allows redeleration but let doesn't allow




// question-8
// var x=12
//     x=14
// console.log(x)

// let c=12
//     c=43
// console.log(c)     

// const s=12
//       s=13
// console.log(s)

// here var and let give output after give reassignment but const does not give the output 





// // question-9
// var x = 10;

// if (true) {
//     var x = 20;
//     let y = 30;
//     const z = 40;
// }

// console.log(x);
// console.log(y);
// console.log(z);


// here var is lnly one who give the output:-20 while let and const does not give the output.






// // question-10
// const name="Piyush";

// let age1 = 20;
// let age2 = 25;

// if (true) {
//     var city = "Delhi";
//     let country = "India";
//     console.log(country)
// }

// console.log(city);

// let score = 50;
// score = 80;
// console.log(score)




// // question-11
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 20;
// const c = 30;


// // here var give undifine output
// // while let and const give error




// // question-12
// console.log(x);
// console.log(y);
// console.log(z);

// var x = "Hello";
// var y = "World";
// var z = "!";

// console.log(x + " " + y + z);





// $$$$$    PART-2     $$$$




// question-1

// var a=1323;
// var b=54.343;
// var c="hello";
// var d= true;
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))



// // question-2

// let a;
// console.log(a)
// console.log(typeof(a))

// let b = null;
// console.log(b)
// console.log(typeof(b));

// Difference bwt undefine and null data type:
// undefine data type: here js's data type is by default "undefine" on empty value.
//  and null data type: where coder give null value("Intentional empty value.") and the type of null data is "object".


// // question-3
// let a= Infinity;
// let b=-Infinity;
// let c= NaN;
// let d= 232.3232e7;
// let e=12_323_434_444

// console.log(a , typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(e,typeof(e))




// question-4

// let a="Piyush"
// let b="dfevrv ferfref erfere"
// let c=`My name is ${a}`
// console.log(a)
// console.log(b)
// console.log(c)

// // question-5
// let symbol1 = Symbol("id");
// let symbol2 = Symbol("id");

// console.log(symbol1 === symbol2);

// let user = {};

// user[symbol1] = "Piyush";
// user[symbol2] = "Rahul";

// console.log(user[symbol1]);
// console.log(user[symbol2]);


// question-6

// let num = 9007199254740991;

// console.log(num + 1);
// console.log(num + 2);
// console.log(num + 3);


// // question-7
// Description	                               Data Type	                                                   Example
// A unique identifier that is never equal to another value with the same description	  Symbol	           let id = Symbol("id");
// A very large integer that must keep exact precision                                    	BigInt	                                               let number = 12345678901234567890n;
// A variable declared but not yet given a value	                                    undefined	           let value;
// An intentional empty value                                                         	null	             let value = null;


// // question-8
// let a;
// let b = null;
// let c = 42;
// let d = "Hello";
// let e = true;
// let f = Symbol("key");
// let g = 123n;

// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);
// console.log(typeof f, f);
// console.log(typeof g, g);



// output
// undefined undefined
// object null
// number 42
// string Hello
// boolean true
// symbol Symbol(key)
// bigint 123n


// // question-9
// let num = 10;
// let text = "Hello";
// let flag = true;
// let empty;
// let nothing = null;
// let unique = Symbol("id");
// let big = 9007199254740991n;

// console.log(num, text, flag, empty, nothing, unique, big);





// PART-03

// // question-01
// let obj={
//     name:"Riya",
//     age:18,
//     isEnrolled: true,
// }
// console.log(obj.name,obj.age,obj.isEnrolled)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.isEnrolled)



// // question-02
// let num=[1,2,3,4,5,6,7];
// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])
// console.log(num[5])





// // question-03
// function calculateArea(length,width){
//     let a = "piyush"
//     return(length*width)
    

// }

// --------------by sir ji
// let arr = [1,2,3];
// console.log(arr)
// console.log(typeof(arr))

// function abc(){

// }
// console.log(abc())     // [function]
// console.log(typeof(abc))   // function
// console.log(calculateArea(7,7))
// console.log(calculateArea(13,9))





// // question-04
// let a=1234;
// b="Hello";
// c=true;
// d=null;
// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// let name={
//     a:"Ki haal hai ji",
// }
// console.log(name.a,typeof(name.a))
// let A=["12","pifdvfd",12,null]
// console.log(A[1],A[2],A[3],A[4])
// console.log(typeof(A))
// function abc(){
// }
// console.log(abc)
// console.log(typeof(abc))


// // question-05
// let userName;      =>valid
// let 2ndPlace;      =>Invaild,because of the rule of variable naming rules, Vaild=>let place2nd
// let _privateData;  =>vaild
// let $price;        =>vaild
// let my-age;        =>Invaild,because of the rule of variable naming rules, Vaild=>my_age
// let function;      =>Invaild,because of the rule of variable naming rules,vaild=>only function or let
// let totalCount;    =>Vaild
// let const;         =>Invaild,because of the rule of variable naming rules,vaild=>only let or conts




// // question-06
// let num_1 = 10;
// let num_2 = 5;
// const Product = x * y;
// let BIG = 100;


// // question-07
// // 01:-
// var a;
// console.log(a)
// var a=10
// console.log(a)
// // 02:-
// let name="Piyush"
// console.log(name)
// // 03:-
// const age=19
// console.log(age)





//question-08
// 01:-object 
// 02:-object
// 03:-function
// 04:-Amit
// 05:-red
// 06:-Hi!


// let person = { name: "Amit", age: 22 };
// let colors = ["red", "green", "blue"];
// function sayHi() {
//   return "Hi!";
// }
// let empty = null;

// console.log(typeof person);
// console.log(typeof colors);
// console.log(typeof sayHi);
// console.log(typeof empty);
// console.log(person.name);
// console.log(colors[1]);
// console.log(sayHi());


// // question-09
// let student01 = { name: "Neha", Age: 19 }
// let scores = [90, 85, 88]
// function greet(name){
//   return "Hello " + name;
// }
// const maxScore = 100

// console.log(student01.name)
// console.log(scores[0])
// console.log(greet("Neha"))
// console.log(maxScore)



// question-10
// a:- In Object, Collection of key-value and keys are property names; values can be any data type.
//     In Arry, Ordered list of values; Accessed by index(position) , starting from 0