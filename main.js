// Create Array
let friends = ['Beni', 'Scotty', 'Rocky', 'Lucky']


// test 1: Output in console
console.log(friends)

// test 2: Output in console: specific value by index
console.log(friends[0])

// test 3: Output in console: use loop to print every value in array (index + value)
for (let item in friends) {console.log(item + ' : ' + friends[item])}



// Modify array: add a new element
friends[4] = 'Billo'


// test 4: Output in console: print modified array
console.log(friends)



// Modify array: change value by its index
friends[0] = 'Bee'

// test 5: Output in console: print modified array
console.log(friends)
