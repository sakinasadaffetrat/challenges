/* Challenges to Solve */
//  JS Functions using Objects

/*  Calculate the Profit  */



function profit(info) {
  result = Math.round((info.sellPrice * info.inventory)-(info.costPrice * info.inventory))
  }

  profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
  }) ➞ 14796
  
  profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
  }) ➞ 32411
  
  profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
  }) ➞ 44030