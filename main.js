
// create a for loop with its 3 statements: initialization; statements; execution
for(                            // initialization (while / for)
                                // statements
    let i = 1;                       // provide min range (1)
     i <= 5;                         // provide end of loop (max range = 5)
     i++                             // provide increment (++) or decrement (--)
    ) {                         // execution
    console.log('Hi ' + i)                              
}


// ----------- Practical Application


// Create an empty array
let colorList = []

// For Loop initialization
for (let i = 0; i <= 2; i++) {
    // input value
    let color = prompt('Enter a color ')
    // append value to list
    colorList.push(color)
}

// Create output
let outputMessage = 'Your list of colors is: ' + colorList

// Example output 1: provide pop-up alert
alert(outputMessage)

// Example output 2: generate output in `index.html`
document.getElementById('colorlist').innerHTML = outputMessage
