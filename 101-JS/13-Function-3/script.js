/* MAKE A FUNCTION INSIDE OF OBJECTS */

const person = {
    'name':'Gesa',
    'age': 19,
    'height': 178,
    'hobby': function(things){
        console.log(`the Hoby is: ${things}`) // 1st Method You Can create function inside object 
    },
    address(street){
        console.log(`Living in ${street}`) // 2nd Method You Can create function inside object 
    }
}

person.hobby("Playing Games"); // Because is became a function you can call it by .hobby();
person.address("Melon V"); // Because is became a function you can call it by .address();
