function maxStockProfit(priceArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let chargeBuyPrice = true;

  for (let i = 0; i < priceArr.length; i++) {
    if (chargeBuyPrice) buyPrice = priceArr[i];
    sellPrice = priceArr[i + 1];

    if (sellPrice < buyPrice) {
      chargeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      chargeBuyPrice = false;
    }
  }

  return maxProfit;
}

console.log(maxStockProfit([45, 24, 35, 31, 40, 38, 11]));
