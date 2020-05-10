/* Challenges to Solve */

/* COUNT GENDERS: 2 women and 4 men in result */

let arr = [  {
	  name: "Neha",
	  gender: "woman",
	},
	{
	  name: "Mina",
	  gender: "woman",
	},
	{
	  name: "Yaser",
	  gender: "man",
	},
	{
	  name: "Rene",
	  gender: "man",
	},
	{
	  name: "Iman",
	  gender: "man",
	},
	{
	  name: "Shams",
	  gender: "man",
	},
  
  ];
  
  let numOfWoman = 0;
  let numOfMan = 0;
  
  arr.forEach(function(element){
	if(element.gender === "man"){
	  numOfMan++;
	}else {
	  numOfWoman++;
	}
  });
  
  console.log(" The list contains " + numOfWoman + " women and " + numOfMan + " men " );
  


