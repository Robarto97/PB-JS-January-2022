function tennisEquip(input){
    const rocketPrice = Number(input[0]);
    const rocketNum = Number(input[1]);
    const runnersNum = Number(input[2]);

    const runnersPrice = rocketPrice/6;
    const otherEquipment = (rocketNum*rocketPrice + runnersNum*runnersPrice)*0.2;
    const totalPrice = otherEquipment + rocketNum*rocketPrice + runnersNum*runnersPrice;
    const priceDjokovic = totalPrice/8;
    const priceSponsors = totalPrice*7/8;
    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsors)}`);
}

tennisEquip([850,4,2])