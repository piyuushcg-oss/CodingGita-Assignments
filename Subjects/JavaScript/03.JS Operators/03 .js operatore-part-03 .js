// Part C] Relational Operator

// /// //// ///          Greater Than >

// // question-01

// let studentMarks=78;
// let passingMarks=40;
// console.log("Result=",passingMarks<studentMarks)



// // question-02
// let todayTemperature=35;
// let yesterdayTemperatue=28;
// console.log("Is today temperature is hot than yesterday:",todayTemperature>yesterdayTemperatue)




// question-03
// console.log(15 > 10);   =>true
// console.log(10 > 15);   =>false
// console.log(10 > 10);   =>false





// // question-04

// console.log("20" > 15);         //=>true
// console.log("5" > "10");        //=>
// console.log("abc" > 10);        //=>false





// // question-05

// console.log(null>0);         //reason:-    0 doesn't greater then 0
// console.log(undefined>0);       ///reason:-   NaN always return false 






// // question-06

// let itemsInShop=120;
// let costomerWantsItem=85;
// console.log("Is amount of items in shop is sufficient:",itemsInShop>costomerWantsItem);





// // question-07

// console.log(true > false);    //true; conservsion of true and false are 1 and 0
// console.log("10" > "2");      //false; reason js compair them through lexicographically (character by character) as "1" > and "2" is wrong.
// console.log(NaN > 5);     //=>false; because campairsion with NaN return false









// LESS THAN <



// // question-01

// let maxWeigth=50;
// let loadedWeight=42;
// console.log(loadedWeight<maxWeigth)




// // question-02

// let requiredAge=18
// let currentAge=16
// console.log(requiredAge<currentAge)




// // question-03

// console.log(8 < 12);
// console.log(20 < 10);
// console.log(7 < 7);

// // output:-
// true
// false
// false




// // question-04
// console.log("8" < 10);
// console.log("20" < "3");
// console.log("hello" < 5);

// // output:-
// true
// true
// false






// // question-5

// console.log(null<0);   //false null returns false
// console.log(undefined<0);    // false 0<0




// // question-06

// let capacityOfTank=500;
// let CurrentWaterLevel=375;
// console.log(CurrentWaterLevel<capacityOfTank)





// // qiestion-07
// console.log(false < true);      // true, 0<1
// console.log("5" < "15");       // false, 5 not less then 1
// console.log(NaN < 10);     //false, reason:NaN return false mostly.









//  Greater Than or Equal To >=


// // question-01

// let requireMark=75;
// let studentMark=75
// console.log("Is student pass:",requireMark >= studentMark)






// // question-02

// let ticketPrice=300;
// let cash=300;
// console.log("Can person buy thr ticket:",ticketPrice>=cash)






// // question-03

// console.log(25 >= 25);
// console.log(30 >= 25);
// console.log(20 >= 25);

// // 'output:-'

// true
// true
// false





// // question-04
// console.log("25" >= 25);
// console.log("10" >= "2");
// console.log(null >= 0);

// 'output:-'
// true
// false
// true




// // question-05
// console.log(undefined>=0)

// reason:NaN>=0







// // Question-06

// let maxLimitOfLift=8;
// let personInsideLift=8;
// console.log("Is lift full:",maxLimitOfLift>=personInsideLift)





// // question-07

// console.log(true >= 1);
// console.log("" >= 0);
// console.log(NaN >= NaN);

// 'output:-'
// true
// true
// false














//////////   LESS THAN OR EQUAL TO <=     ///////////////////


// // question-01

// let speedlimit=60;
// let maxLimit=60;
// console.log("is within the limit:",speedlimit<=maxLimit)





// // question-02

// let requiredMark=40;
// let scoredMark=39;
// console.log("Is he failed:", scoredMark<=requiredMark )





// // question-03
// console.log(15 <= 20);
// console.log(20 <= 15);
// console.log(15 <= 15);

// 'output:-'
// true
// false
// true




// // question-04

// console.log("15" <= 20);
// console.log("30" <= "5");
// console.log(null <= 0);

// // 'output:-'
// true
// true
// true






// // question-05

// console.log(undefined<=0);

// 'reason:-'
// // NaN does not less or equal to 0





// // question--6

// let maxBook=10;
// let currentBook=10;
// console.log("Is adding more books distoy the bag:",maxBook<=currentBook)




// // question-07
// console.log(false <= 0);
// console.log("" <= 0);
// console.log(NaN <= 5);

// 'output:-'
// true   0<=0
// true   0<=0
// false   NaN is not equal to 5











// Mixed Practice (>, <, >=, <=)


// // question-01


// a)

// let requireAgeForVote=18
// let currentAge=18
// console.log("Is he able to vote:",requireAgeForVote<=currentAge)


// b)

// console.log(32<=35)

// c)

// console.log(90>=85)





// // question-02

// console.log(10 > 5 && 5 < 10);
// console.log("10" >= 10);
// console.log(null <= undefined);
// console.log("5" < "10" && 5 > 2);

// 'output:-'

// true
// true
// false
// false




// // question-03

// let costOfProduct=499
// let customerHavingCash=500
// console.log("Is customer able to buy produt:",customerHavingCash>=costOfProduct)
// console.log("Left money:1")




// // question-04

// Explanation
// In JavaScript, "10" > "2" is false, but 10 > 2 is true because JavaScript compares strings and numbers differently.
// 1. "10" > "2" → false
// Both values are strings because they are inside quotation marks. JavaScript compares them lexicographically (character by character).
// - First character of "10" is "1".
// - First character of "2" is "2".
// - Since "1" comes before "2", "10" is considered smaller than "2".
// Therefore, the result is false.
// console.log("10" > "2"); // false


// 2. 10 > 2 → true
// Both values are numbers, so JavaScript compares their numerical values.
// - 10 is greater than 2.
// Therefore, the result is true.
// console.log(10 > 2); // true