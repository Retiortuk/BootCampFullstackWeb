/* String Methods */

// .search() = For Searching / Start from zero, space includes counted /
// .length = To know the length Start from zero, space includes counted
// .slice() =  it will delete the data or slice it
// .substr() = t will only showing the data that it start and end in parameter
// .replace() = For Replace 
// .toUppercase() = For Uppercase 
// .toLowercase() = For Lowercase 
// .trim() = To Delete Unwanted Spaces
// .split() = To make each sentence to be an array or object data

let car = "Nissan Skyline GT-R R34 1999"

// car.search("Skyline") // Searching
// car.length // lentgh of data
// car.slice(1, 25) // it will delete the data or slice it
// car.substring(1, 14) // it will only showing the data that it start and end in parameter
// car.replace("which data you want to change type here", "new data that will insert to car data")
// car.toUpperCase('Nissan')
// car.toLowerCase('Nissan')
// car.trim() // To Delete Unwanted Spaces
// data = car.split(" ") // To make each sentence to be an array or object data
// typeof(variable) = to see the type of element


// ------------------------------------------------------------------------------------------------------


/* Change Data Type From String To Intg Vice Versa */

// typeof(variable) = important To use

age = 31;
// age = Number(age) : To Convert age to Number (int) 
// age = String(age) : To Convert age to String  


// ------------------------------------------------------------------------------------------------------


/* Concatenation */

const name = "Gesa";
college = "Telkom University" ;
umur = 19 ;

// OLD SCHOOL WAY
// console.log('My name is ' + name +' Im From ' + college +' and my age is ' + umur) 

// Modern Way Using Semi Baptic but not avail on My keyboard's pc
// console.log('My name is ${name} Im From ${college} and my age is ${umur}')
// UPDATED AVAIL ON MY LAPTOP
console.log(`My Name is ${name} Im From ${college} and my age is ${age}`)


// ------------------------------------------------------------------------------------------------------

// Array 

const lst = ["Gesa", 19, "Seberapa", 120, "Lah", {}, []]

// To Push Items to The Data Array Using:
lst.push("new item here")

// To Delete items usin pop: (Only Delete The Latest Data Array)
// const newitms = lst.pop()

// Array Iteration
const arr = ['Zero', 'One', 'two', 'three', 'four', 'five']

//Old School Way
// for (let i = 0; i < arr.length; i++) {
//     console.log(i , arr[i])
// }

//Modern Way
arr.forEach(no => {
    console.log(no)
})