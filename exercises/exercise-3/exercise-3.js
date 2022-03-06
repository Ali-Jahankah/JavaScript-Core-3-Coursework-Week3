let order = [{
    itemName: "Hot cakes",
    quantity: 1,
    unitPrice: 2.29
  },
  {
    itemName: "Apple Pie",
    quantity: 2,
    unitPrice: 1.39
  },
  {
    itemName: "Egg McMuffin",
    quantity: 1,
    unitPrice: 2.8
  },
  {
    itemName: "Sausage McMuffin",
    quantity: 1,
    unitPrice: 3.0
  },
  {
    itemName: "Hot Coffee",
    quantity: 2,
    unitPrice: 1.0
  },
  {
    itemName: "Hash Brown",
    quantity: 4,
    unitPrice: 0.4
  },
];
const count = (arr) => {
  let total = 0;
  const price = 0;
  let message = `QTY         Item                   Total`;
  console.log(message);
  arr.forEach(obj => {
    const {
      itemName: name,
      quantity: number,
      unitPrice: price,
    } = obj;
    message = `${number}       ${name}                 ${number*price}`;
    total += number * price;
    console.log(message);
  });
  console.log("total: " + total);
}
count(order)