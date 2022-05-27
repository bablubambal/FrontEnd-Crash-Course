console.log("tut6.js")

//Lopping Statements

/**
 *  3 type of loops
 * 1 . for
 * 2. while
 * 3. do while
 * 
 * 
 */
number = []


// Traditional Way of writing the loopps
for(i=1;i<=100;i++){
    // console.log(i)
    number.push(i)
}
console.log(number)

//Modern approch to write the for loops
// number.forEach(element => {
//     console.log(element)
// });
// number.forEach(element => console.log(element));


//Map function its very usefull ->ES6 Syntax
// number.map((e)=>console.log(e))


//while loop
console.log("while loop")
i=20
while (i<10) {
    console.log(i)
     i =i+1
  
    
}
console.log("---------------------------")
j = 20
do {
    console.log(j)
    j = j+1
} while (j<10);
