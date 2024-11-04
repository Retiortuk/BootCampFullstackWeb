// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name");
const age = document.getElementById("age");
const dogyears = document.getElementById("dogyears");

// Step 2. Set the values.
name.innerText = "Gesa";
age.innerText = 20;
dogyears.innerText = 1.5;

// Step 3. Cast `age` as a number with function
function showDogyears(age){
    dogyears.innerText = age*2;
    return age*2;
}

// Step 4. Set the parameter of showCatyears()
dogyears.innerText = showDogyears(10);


// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" 
//to find the solution, but that's half of what web development is all about.
const fakeInput = document.querySelectorAll(".fake-input");
fakeInput.forEach(node => {
    node.classList.replace("fake-input", "real-input")
});


