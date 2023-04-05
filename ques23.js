//Write a program to check that the number given by the user is a prime number or not.

num = 15;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}

if (count === 2) {
  console.log("prime number");
} else {
  console.log("not prime number");
}
count = 0;
