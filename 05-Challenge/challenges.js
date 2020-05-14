/* Challenges to Solve */
//  JS Functions using Objects

/*  Calculate the Profit  */

 //Profit = Total Sales - Total Cost 

  let profit = {
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
  }; 
   let profit1 = {
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
  }; 
  let profit2 = {
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
  }; 

  function totalProfit(profit){
    return (profit.sellPrice * profit.inventory)-(profit.costPrice * profit.inventory);
  }
  console.log(totalProfit(profit));
  console.log(totalProfit(profit1));
  console.log(totalProfit(profit2));
