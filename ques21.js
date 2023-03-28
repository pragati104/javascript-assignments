let countries = ['USA', 'Canada', 'Brazil', 'Mexico'];
let found = false;

for (let i = 0; i < countries.length; i++) {
  if (countries[i] === 'Ethiopia') {
    found = true;
    console.log('ETHIOPIA');
    break;
  }
}

if (!found) {
  countries.push('Ethiopia');
  console.log(countries);
}