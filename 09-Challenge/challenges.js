/* Challenges to Solve */
/* HTML DOM */
const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

// ------Chaning the h1 title
h1.innerHTML = "ps: These notes are not valid anymore.";
console.log(h1.innerHTML);

// ADD CLASS AND ID 
h1.setAttribute('id', 'main-title');
h1.setAttribute('class', 'title');
console.log(h1.id);
console.log(h1.class);