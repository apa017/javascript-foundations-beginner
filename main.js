// Keep prompting until a valid integer between 0 and 100 is entered
let grade;

do {
    let input = prompt('Enter your grade - value between 0 and 100:');
    grade = parseInt(input); // Convert input to integer
} while (isNaN(grade) || grade < 0 || grade > 100); // Repeat if invalid



// Explore conditions
if (grade >=90) {
    message = 'Your grade is A.'
    console.log(message)                // print to console
    alert(message)                      // return message on webpage as popup window
}

else if (grade >=80) {
    message = 'Your grade is B.'
    console.log(message)
    alert(message)
}

else if (grade >=70) {
    message = 'Your grade is C.'
    console.log(message)
    alert(message)
}

else if (grade >=60) {
    message = 'Your grade is D.'
    console.log(message)
    alert(message)
}

else if (grade >=50) {
    message = 'Your grade is E.'
    console.log(message)
    alert(message)
}

else {
    message = 'Your grade is F.'
    console.log(message)
    alert(message)
}
