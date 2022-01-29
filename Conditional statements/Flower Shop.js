function flowerShop(input) {
  const magnolia = Number(input[0]);
  const hyacinth = Number(input[1]);
  const rose = Number(input[2]);
  const cactus = Number(input[3]);
  const presentPrice = Number(input[4]);

  const magnoliaPrice = 3.25;
  const hyacinthPrice = 4;
  const rosePrice = 3.5;
  const cactusPrice = 8;

  const totalPrice =
    magnolia * magnoliaPrice +
    hyacinth * hyacinthPrice +
    rose * rosePrice +
    cactus * cactusPrice;

    const finalPrice = totalPrice*0.95;
    const difference = Math.abs(presentPrice - finalPrice);

    if(presentPrice <= finalPrice){
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
    }
}

flowerShop([2,3,5,1,50]);
flowerShop([15,7,5,10,100]);