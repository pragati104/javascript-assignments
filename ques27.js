// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let count = 0;
for (let i = 0; i <= 100; i++) {
  for (let j = 0; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(i);
  }
  count = 0;
}
