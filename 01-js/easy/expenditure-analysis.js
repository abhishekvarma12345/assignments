/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let priceSum = {};
  for (let i=0; i<transactions.length; i++) {
    if (!priceSum[transactions[i].category]) {
      priceSum[transactions[i].category] = transactions[i].price;
    }
    else{
      priceSum[transactions[i].category] += transactions[i].price;
    }
  }

  const listOfObjects = Object.entries(priceSum).map(([key, value]) => {
          return { category:key, totalSpent: value };
      });
  return listOfObjects;
}

module.exports = calculateTotalSpentByCategory;
