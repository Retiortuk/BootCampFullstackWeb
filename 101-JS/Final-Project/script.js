// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById('name');
const age = document.getElementById('age');
const catyears = document.getElementById('catyears');

// Step 2. Set the values.
name.innerText = 'Gesa';
age.innerText = 20;
catyears.innerText = 1.5;


// Step 3. Cast `age` as a number
function showCatYears(age){
    catyears.innerText = age*2;
    return age*2;
}
// Step 4. Set the parameter of showCatyears()
catyears.innerText = showCatYears(1);


// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" 
//to find the solution, but that's half of what web development is all about.
const fakeInputs = document.querySelectorAll(".fake-input");
fakeInputs.forEach(node => {
    node.classList.replace("fake-input", "real-input");
})


