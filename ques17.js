// <!-- Write a program which tells the number of days in a month. -->

 let getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(2,2023));
console.log(getDaysInMonth(2,2022));
console.log(getDaysInMonth(2,2020));