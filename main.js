let firstName = prompt('Enter your first name')
let lastName = prompt('Enter your last name')
let age = prompt('Enter your age')

// convert age (string) to number
age = parseInt(age)

// create variable from input
newAge = age + 2

// output to console
console.log(firstName)
console.log(lastName)
console.log("Your age is " + age)
console.log("2 years from now your age will be: " + newAge)