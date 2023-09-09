// data/menuData.js
import {
  IconDefinition,
  faBarcode,
  faBowlFood,
  faCakeCandles,
  faCookie,
  faCreditCard,
  faMugHot,
  faMugSaucer,
  faPen,
  faSackDollar,
  faSearch,
  faWineBottle,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
const menus = [
  {
    id: 1,
    color: "#cfdedb",
    title: "Breakfast",
    count: 13,
    icon: faMugSaucer,
    items: [
      {
        id: 1,
        title: "Pancakes",
        price: 6.25,
      },
      {
        id: 2,
        title: "French Toast",
        price: 5.95,
      },
      {
        id: 3,
        title: "Eggs Benedict",
        price: 8.5,
      },
      {
        id: 4,
        title: "Omelette",
        price: 7.2,
      },
      {
        id: 5,
        title: "Waffles",
        price: 6.75,
      },
      {
        id: 6,
        title: "Bagel with Cream Cheese",
        price: 4.9,
      },
      {
        id: 7,
        title: "Fruit Salad",
        price: 5.5,
      },
      {
        id: 8,
        title: "Bacon and Eggs",
        price: 9.25,
      },
      {
        id: 9,
        title: "Breakfast Burrito",
        price: 7.75,
      },
      {
        id: 10,
        title: "Muffin",
        price: 3.5,
      },
      {
        id: 11,
        title: "Yogurt Parfait",
        price: 4.95,
      },
      {
        id: 12,
        title: "Sausage Links",
        price: 6.8,
      },
      {
        id: 13,
        title: "Hash Browns",
        price: 4.25,
      },
    ],
  },

  {
    id: 2,
    color: "#e5cded",
    title: "Soups",
    count: 8,
    icon: faMugHot,
    items: [
      {
        id: 1,
        title: "Chicken Noodle Soup",
        price: 4.95,
      },
      {
        id: 2,
        title: "Tomato Bisque",
        price: 5.25,
      },
      {
        id: 3,
        title: "Minestrone",
        price: 4.75,
      },
      {
        id: 4,
        title: "Lentil Soup",
        price: 4.5,
      },
      {
        id: 5,
        title: "Clam Chowder",
        price: 6.75,
      },
      {
        id: 6,
        title: "Cream of Broccoli",
        price: 5.5,
      },
      {
        id: 7,
        title: "Potato Leek Soup",
        price: 4.85,
      },
      {
        id: 8,
        title: "Beef Stew",
        price: 6.95,
      },
    ],
  },
  {
    id: 3,
    color: "#c1dbe8",
    title: "Pasta",
    count: 10,
    icon: faBowlFood,
    items: [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        price: 9.95,
      },
      {
        id: 2,
        title: "Fettuccine Alfredo",
        price: 10.25,
      },
      {
        id: 3,
        title: "Lasagna",
        price: 11.75,
      },
      {
        id: 4,
        title: "Penne with Vodka Sauce",
        price: 9.5,
      },
      {
        id: 5,
        title: "Ravioli with Pesto",
        price: 10.75,
      },
      {
        id: 6,
        title: "Spaghetti Bolognese",
        price: 12.25,
      },
      {
        id: 7,
        title: "Linguine with Clam Sauce",
        price: 11.95,
      },
      {
        id: 8,
        title: "Macaroni and Cheese",
        price: 8.95,
      },
      {
        id: 9,
        title: "Pappardelle with Mushroom Cream Sauce",
        price: 11.5,
      },
      {
        id: 10,
        title: "Gnocchi with Tomato Basil Sauce",
        price: 9.25,
      },
    ],
  },
  {
    id: 4,
    color: "#c8caf0",
    title: "Sushi",
    count: 15,
    icon: faCookie,
    items: [
      {
        id: 1,
        title: "California Roll",
        price: 8.95,
      },
      {
        id: 2,
        title: "Spicy Tuna Roll",
        price: 9.25,
      },
      {
        id: 3,
        title: "Salmon Nigiri",
        price: 7.5,
      },
      {
        id: 4,
        title: "Shrimp Tempura Roll",
        price: 10.5,
      },
      {
        id: 5,
        title: "Eel Dragon Roll",
        price: 12.95,
      },
      {
        id: 6,
        title: "Rainbow Roll",
        price: 13.75,
      },
      {
        id: 7,
        title: "Vegetable Sushi Platter",
        price: 11.95,
      },
      {
        id: 8,
        title: "Sashimi Combo",
        price: 14.5,
      },
      {
        id: 9,
        title: "Octopus Nigiri",
        price: 8.25,
      },
      {
        id: 10,
        title: "Cucumber Roll",
        price: 6.95,
      },
      {
        id: 11,
        title: "Tuna Sashimi",
        price: 12.25,
      },
      {
        id: 12,
        title: "Avocado Nigiri",
        price: 6.75,
      },
      {
        id: 13,
        title: "Philadelphia Roll",
        price: 11.95,
      },
      {
        id: 14,
        title: "Spider Roll",
        price: 12.75,
      },
      {
        id: 15,
        title: "Miso Soup",
        price: 3.95,
      },
    ],
  },
  {
    id: 5,
    color: "#fbc1d9",
    title: "Main Course",
    count: 7,
    icon: faBowlFood,
    items: [
      {
        id: 1,
        title: "Grilled Salmon",
        price: 16.95,
      },
      {
        id: 2,
        title: "Filet Mignon",
        price: 24.95,
      },
      {
        id: 3,
        title: "Chicken Parmesan",
        price: 14.75,
      },
      {
        id: 4,
        title: "Vegetable Stir-Fry",
        price: 12.95,
      },
      {
        id: 5,
        title: "Lobster Tail",
        price: 29.95,
      },
      {
        id: 6,
        title: "Pork Chop",
        price: 15.5,
      },
      {
        id: 7,
        title: "Eggplant Parmesan",
        price: 13.25,
      },
    ],
  },
  {
    id: 6,
    color: "#e5dade",
    title: "Desserts",
    count: 9,
    icon: faCookie,
    items: [
      {
        id: 1,
        title: "Chocolate Cake",
        price: 7.95,
      },
      {
        id: 2,
        title: "Cheesecake",
        price: 6.75,
      },
      {
        id: 3,
        title: "Tiramisu",
        price: 8.25,
      },
      {
        id: 4,
        title: "Fruit Tart",
        price: 5.95,
      },
      {
        id: 5,
        title: "Ice Cream Sundae",
        price: 6.5,
      },
      {
        id: 6,
        title: "Pecan Pie",
        price: 7.25,
      },
      {
        id: 7,
        title: "Creme Brulee",
        price: 8.95,
      },
      {
        id: 8,
        title: "Lava Cake",
        price: 7.5,
      },
      {
        id: 9,
        title: "Fudge Brownie",
        price: 5.25,
      },
    ],
  },
  {
    id: 7,
    color: "#f1c8d0",
    title: "Drinks",
    count: 11,
    icon: faWineBottle,
    items: [
      {
        id: 1,
        title: "Coca-Cola",
        price: 2.25,
      },
      {
        id: 2,
        title: "Pepsi",
        price: 2.25,
      },
      {
        id: 3,
        title: "Sprite",
        price: 2.25,
      },
      {
        id: 4,
        title: "Iced Tea",
        price: 2.0,
      },
      {
        id: 5,
        title: "Lemonade",
        price: 2.5,
      },
      {
        id: 6,
        title: "Orange Juice",
        price: 3.0,
      },
      {
        id: 7,
        title: "Cranberry Juice",
        price: 3.25,
      },
      {
        id: 8,
        title: "Coffee",
        price: 2.0,
      },
      {
        id: 9,
        title: "Hot Chocolate",
        price: 2.75,
      },
      {
        id: 10,
        title: "Bottled Water",
        price: 1.5,
      },
      {
        id: 11,
        title: "Milkshake",
        price: 4.0,
      },
    ],
  },
  {
    id: 8,
    color: "#c1e9de",
    title: "Alcohol",
    count: 12,
    icon: faWineGlass,
    items: [
      {
        id: 1,
        title: "Red Wine",
        price: 8.95,
      },
      {
        id: 2,
        title: "White Wine",
        price: 9.25,
      },
      {
        id: 3,
        title: "Beer (Draft)",
        price: 5.75,
      },
      {
        id: 4,
        title: "Martini",
        price: 10.5,
      },
      {
        id: 5,
        title: "Margarita",
        price: 9.95,
      },
      {
        id: 6,
        title: "Scotch Whiskey",
        price: 12.75,
      },
      {
        id: 7,
        title: "Vodka",
        price: 8.5,
      },
      {
        id: 8,
        title: "Tequila",
        price: 9.25,
      },
      {
        id: 9,
        title: "Rum",
        price: 7.5,
      },
      {
        id: 10,
        title: "Gin",
        price: 8.75,
      },
      {
        id: 11,
        title: "Whiskey Sour",
        price: 9.95,
      },
      {
        id: 12,
        title: "Irish Coffee",
        price: 8.95,
      },
    ],
  },
];

export default menus;
