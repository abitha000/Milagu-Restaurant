export interface MenuItem {
  name: string;
  isSpecial?: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Soups",
    items: [
      { name: "Mutton Soup" },
      { name: "Chicken Soup" },
      { name: "Nattu Kozhi Soup" },
      { name: "Mushroom Soup" },
      { name: "Sweet Corn Soup" },
    ],
  },
  {
    category: "Starters — Veg",
    items: [
      { name: "Gobi 65" },
      { name: "Paneer 65" },
      { name: "Mushroom Pepper Fry" },
      { name: "Onion Pakoda" },
      { name: "Baby Corn Fry" },
      { name: "Crispy Corn" },
    ],
  },
  {
    category: "Starters — Chicken",
    items: [
      { name: "Chicken 65" },
      { name: "Chicken Lollipop" },
      { name: "Pepper Chicken" },
      { name: "Chicken Manchurian" },
      { name: "Chicken Pakoda" },
      { name: "Chicken Wings Fry" },
      { name: "Chicken Pepper Chukka", isSpecial: true },
    ],
  },
  {
    category: "Starters — Mutton",
    items: [
      { name: "Mutton Chukka" },
      { name: "Mutton Pepper Fry" },
      { name: "Mutton Cutlet" },
      { name: "Madurai Mutton Kola Urundai", isSpecial: true },
      { name: "Mutton Brain Fry" },
      { name: "Mutton Liver Fry" },
    ],
  },
  {
    category: "Starters — Seafood",
    items: [
      { name: "Vanjiram Tawa Fry", isSpecial: true },
      { name: "Fish Finger" },
      { name: "Fish 65" },
      { name: "Prawn 65" },
      { name: "Prawn Pepper Fry" },
      { name: "Crab Masala", isSpecial: true },
      { name: "Nandu Varuval" },
      { name: "Squid Fry" },
    ],
  },
  {
    category: "Tiffin",
    items: [
      { name: "Plain Dosa" },
      { name: "Masala Dosa" },
      { name: "Kari Dosa", isSpecial: true },
      { name: "Chicken Pepper Chukka Dosa", isSpecial: true },
      { name: "Egg Dosa" },
      { name: "Onion Uthappam" },
      { name: "Idli (2 pcs)" },
      { name: "Vada (2 pcs)" },
      { name: "Pongal" },
      { name: "Poori" },
    ],
  },
  {
    category: "Biryanis",
    items: [
      { name: "Milagu Spl Nalli Biryani", isSpecial: true },
      { name: "Chicken Biryani" },
      { name: "Mutton Biryani" },
      { name: "Egg Biryani" },
      { name: "Nattu Kozhi Biryani" },
      { name: "Prawn Biryani" },
      { name: "Fish Biryani" },
    ],
  },
  {
    category: "Egg Varieties",
    items: [
      { name: "Egg Omelette" },
      { name: "Egg Bhurji" },
      { name: "Egg Pepper Fry" },
      { name: "Egg Podimas" },
      { name: "Half Boil / Full Boil" },
    ],
  },
  {
    category: "Rice & Meals",
    items: [
      { name: "Veg Meals" },
      { name: "Non-Veg Meals (Chicken)" },
      { name: "Non-Veg Meals (Mutton)" },
      { name: "Chicken Fried Rice" },
      { name: "Egg Fried Rice" },
      { name: "Jeera Rice" },
      { name: "Curd Rice" },
      { name: "Sambar Rice" },
      { name: "Lemon Rice" },
    ],
  },
  {
    category: "Parotta",
    items: [
      { name: "Plain Parotta" },
      { name: "Egg Parotta" },
      { name: "Chicken Parotta" },
      { name: "Mutton Parotta" },
      { name: "Kothu Parotta (Chicken)" },
      { name: "Kothu Parotta (Mutton)" },
      { name: "Ceylon Parotta" },
    ],
  },
  {
    category: "Kuzhambu",
    items: [
      { name: "Chicken Kuzhambu" },
      { name: "Mutton Kuzhambu" },
      { name: "Nalli Elumbu Kuzhambu", isSpecial: true },
      { name: "Crab Kuzhambu" },
      { name: "Prawn Kuzhambu" },
      { name: "Fish Kuzhambu" },
    ],
  },
  {
    category: "Sweets & Beverages",
    items: [
      { name: "Payasam" },
      { name: "Gulab Jamun" },
      { name: "Ice Cream" },
      { name: "Filter Coffee" },
      { name: "Tea" },
      { name: "Badam Milk" },
      { name: "Rose Milk" },
      { name: "Lassi" },
      { name: "Buttermilk" },
    ],
  },
];
