/* FUNCTION PART 2 */

// ...Numbers = you can add multiple parameter using thre dots

function addNumbers(hi, ...numbers){
    let total = 0;
    for (index in numbers){
        total = total + numbers[index];
    }
    return `Hi ${hi} Total Is: ${total}`
}

const result = addNumbers("Gesa", 1,2);
console.log(result)