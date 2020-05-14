/* Challenges to Solve */
/* Is the Word Singular or Plural? */

function isPlural(word){
	if (word.endsWith('s')){
		return "Plural"
	}else {
		return "Singular"
	};
};
console.log(isPlural("dude"));
console.log(isPlural("books"));