/*Practice Arrays for study group       11/04/2021*/

const wigs = [
  {
      id: 1,
      name: "Angie",
      brand: "Remy Human Hair",
      humanHair: true,
      laceFront: true,
      color: "Dark Brown",
      price: 2057.99 
  },
  {
      id: 2,
      name: "Margot",
      brand: "Raquel Welch",
      humanHair: true,
      laceFront: true,
      color: "Glazed Cinnamon",
      price: 2125.99
  },
  {
      id: 3,
      name: "Brie",
      brand: "Vivica Fox",
      humanHair: false,
      laceFront: false,
      color: "Blue Black",
      price: 136.99
  },
  {
      id: 4,
      name: "Skylar",
      brand: "John Renau",
      humanHair: false,
      laceFront: true,
      color: "Honey Syrup",
      price: 365.99
  }
]

for(let i=0; i < wigs.length; i++) {
  console.log(wigs[i].name)
}

