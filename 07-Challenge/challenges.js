/* Challenges to Solve */
//  JS Conditions (suite)
/*Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.*/
function equal(a, b, c) {

	if ( a == b & b == c)
	{
		return 3 + " --> " + " All 3 values are equal";
	}
	else if ( a == b || b == c || a == c)
			{
				return 2 + " --> " + " Two values are equal";
			}
	else
		{
			return 0 + " --> " + " All values are differents";
		}
		console.logequal(55, 65, 20);
}





