let score = 33      // knows that what kind of value variable can be store

// const {score} = req.body        // don't know about what kind of value variables can be store


console.log(typeof score)       // number
console.log(typeof(score))      // number

let score1 = "33"
console.log(typeof score1)       // string
console.log(typeof(score1))      // string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);      // string coverted into number


let new_val= "33abc"
let numstring = Number(new_val)
console.log(typeof numstring);      // give type number, but this is not a number. it is alphanum
console.log(numstring);             // NaN (Not a Number)


let new_val_null = null
console.log(typeof new_val_null);                   // null type -> object 
console.log(new_val_null)                           // null
let cover_null_into_number = Number(new_val_null)
console.log(cover_null_into_number)                 // 0


let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn)                // True


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)            // string


// string is not converted into number so it will give output  -> NaN (not a number)

// "33" = 33
// "33abc" = NaN (not a number)
// true = 1 / false = 0
// "" = (boolean) =  false
// "sakshi" = (boolean) = true

