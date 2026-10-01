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




// // question-4

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


