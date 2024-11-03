
/* To Select Multiple DOM  */

const elms = document.querySelectorAll(".this-class");  // querySelectorAll() = For Select All Class Not Just the First one
console.log(elms)

/* Select List */
const lst = document.querySelectorAll("li");
console.log(lst)


/* For Show Index Sorted Started From 0 */
// lst.forEach((node, index) => {
    // node.innerText = 'Hello This is' + index });

/* To Add Custom Class */
// lst.forEach(node => {
//     node.classList.add("Custom-class","Second-class") -> THIS WIL MAKE NEW 2 CLASS
// });

// lst.forEach(node => {
//     node.classList.add("Custom-Class", "Second-Class")
// });