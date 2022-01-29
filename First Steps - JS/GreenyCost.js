function greenCosts(input){
    let area = input[0];
    let areaPrice = area*7.61;
    let discount = areaPrice*0.18;
    let finalPrice = areaPrice - discount;
    let finalPriceResult = `The final price is: ${finalPrice} lv.`;
    let discountResult = `The discount is: ${discount} lv.`;
    console.log(finalPriceResult);
    console.log(discountResult);
}

greenCosts(["550"]);