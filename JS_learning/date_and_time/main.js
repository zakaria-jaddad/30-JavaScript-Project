/* 
    Assignment 01

    Print the seconds, minutes, hours, days, months and years of your date of birth using the time
    See the result below to know the desired idea
    What is required is to print the values ​​from your date of birth, not the result below
    // Needed Output

    "1247939400 Seconds"
    "20798990 Minutes"
    "346650 Hours"
    "14444 Days"
    "481 Months"
    "40 Years"
 */

const dateNow = new Date()
const myBirth = new Date(Date.parse('09 26 2003'));

const livedTime = dateNow - myBirth;

// seconds
const seconds = parseInt(livedTime / 1000);
console.log(`${seconds} Seconds`);

// minutes
const minutes = parseInt(seconds / 60);
console.log(`${minutes} Minutes`);

// Hours
const hours = parseInt(minutes / 60);
console.log(`${hours} Hours`);

// days
const days = hours / 24;
console.log(`${parseInt(days)} Days`);

// months
const months = days / 30;
console.log(`${parseInt(months)} Months`)

// years
const years = months / 12;
console.log(`${parseInt(years)} year`)

/* 
    Output
    main.js: 24629677888 Seconds
    main.js:28 10494631 Minutes
    main.js:32 174910 Hours
    main.js:36 7287 Days
    main.js:40 242 Months
    main.js:44 20 year
*/



/* 
    Assignment 02

    Print the time 10 years after the beginning of time
    Add just one second to the time
    Regardless of your Time Zone we want the time to be 00:00:01
    See the result below to know the desired idea

*/
// seperation
console.log('#'.repeat(19));

let timeAfter10Years = new Date();

timeAfter10Years.setFullYear(1980, 0, 1);
timeAfter10Years.setHours(0, 0, 1);

console.log(timeAfter10Years);  //Tue Jan 01 1980 00:00:01 GMT+0100 (GMT+01:00)

/* 
    assignment 03

    On the first line, print the complete date and time of the last day of the previous month
    On the second line, print the name of the previous month and the last day of it, as below
    The letter must be printed in the same format
    ! Needed Output

    "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
    "Previous Month Is April And Last Day Is 30"
*/

console.log('#'.repeat(19));

const lastDayOfLastMonth = new Date();

// converting
lastDayOfLastMonth.setMonth(lastDayOfLastMonth.getMonth(), -1)

// ? To Day Is : 8 sep 2023 
console.log(lastDayOfLastMonth)

// Fuck
const Months = ['January', 'Fabruary', 'Mars', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
console.log(`Previous Month Is ${Months[lastDayOfLastMonth.getMonth()]} And Last Day Is ${lastDayOfLastMonth.getDate()}`);


/* 
    Output
    main.js:97 Wed Aug 30 2023 23:04:13 GMT+0100 (GMT+01:00)
    main.js:101 Previous Month Is August And Last Day Is 30
*/


/* 
    Assignment 04

    Print your date and time of birth in 3 different ways
    The way to write a date inside a String is all considered one way, which is String Date
    Make sure that the 3 methods print the date and time with the same values ​​as below
*/

// seperation
console.log('#'.repeat(19));

const myBirthDayDate1 = new Date("09 26 2003");
const myBirthDayDate2 = new Date("09 26 03");
const myBirthDayDate3 = new Date("09-26-2003");

console.log(myBirthDayDate1);
console.log(myBirthDayDate2);
console.log(myBirthDayDate3);

/* 
    Output
    main.js:126 Fri Sep 26 2003 00:00:00 GMT+0100 (GMT+01:00)
    main.js:127 Fri Sep 26 2003 00:00:00 GMT+0100 (GMT+01:00)
    main.js:128 Fri Sep 26 2003 00:00:00 GMT+0100 (GMT+01:00)
*/


/* 
    Assignment 05

    Calculate the time required to print from one number to 99999 in the console
    Performance.now() should be used.
    See the message to print below
    Fractions must be removed from the number and not rounded

*/
performance.mark('start');

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
// }
performance.mark('end');

// store the duation in operationDuration variable
performance.measure('operationDuration', 'start', 'end');

console.log(performance.getEntriesByName('operationDuration'));

/* 
    here is used more advance method than performance.now() approach.
*/

/* 
    assignment 06

    Create a Generator1 Function that generates numbers
    Make sure it prints the numbers in the same pattern as below
    The numbers must be infinity

*/
// Write Your Generator1 Function Here
function* gen() {
    let index = 14;

    while (true) {
        yield index;
        index += 140;
    }
}

let generator1 = gen();

console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 
console.log(generator1.next()); 


/* 
    assignment 07

    You have two Generator1s Function
    What is required is a Generator1 Function that does a Delegate for the rest of the Generator1 Functions
    You should use what you learned to make the last Function exclude duplicate values
    Watch the code to see the result to understand what is required

*/

console.log('#'.repeat(19));

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator1 Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();

  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}


/* 

    Assignment 08

    You have the line below in the Main.js file which is a Function that accepts three values ​​and adds them
    Create the mod-one.js file which contains this Function with 3 Parameters
    The Function must be nameless and do the necessary work in the file to be able to use it in the main.js file
    Create a mod-two.js file
    Copy into it the three variables below and never modify them
    Write what you want in the mod-two.js file so that the code in the main.js file works properly

/
*/

import * as modOne from "./mode-two.js"
import calc from "./mode-one.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60