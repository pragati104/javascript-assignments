//11. Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log('What is the year today?');
const y=new Date()
console.log(y.getFullYear());

console.log('What is the month today as a number?');
console.log(y.getMonth()+1);

console.log('What is the date today?');
console.log(y.getDate());

console.log('What is the day today as a number?');
console.log(y.getDay())
 
console.log("What is the hours now?")
console.log(y.getHours())

console.log('What is the minutes now?')
console.log(y.getMinutes());

console.log('numbers of seconds elapsed from January 1, 1970 to now.')
let past= new Date('1970-01-01')
let now= new Date();
let elapsed=(now - past)
console.log(elapsed)