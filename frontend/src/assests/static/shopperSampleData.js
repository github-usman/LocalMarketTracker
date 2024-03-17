import chips from "../media/products/chips.jpg";
import rice_basmati from "../media/products/rice-basmati.jpeg";
import green_tea_leaves from "../media/products/green-tea-leaves.jpg";
import indian_lentil_dahl_masoor_dal from "../media/products/indian-lentil-dahl-masoor-dal.webp";
import Sugar from "../media/products/sugar.jpg";
import wheat_flour from "../media/products/wheat-flour.jpeg";
import Cooking_Oil_Sunflower from "../media/products/Cooking_Oil_Sunflower.jpeg";
import salt from "../media/products/salt.jpeg";
import spices_mixed from "../media/products/spices_mixed.jpeg";
import biscuits from "../media/products/biscuits.jpeg";
import Snacks_Namkeen from "../media/products/Snacks_Namkeen.jpeg";
import Soft_Drinks from "../media/products/Soft_Drinks.jpeg";
import milk from "../media/products/milk.jpeg";

const shopperSampleData = [
      {
        "id": 1,
        "name": "Gupta Kirana & General Store",
        "email": "guptakirana123@gmail.com",
        "phone": 9897459918,
        "address": "52W5+3RW, Chilli Int Rd, Ghaatia Azam Khan, Civil Lines, Agra, Uttar Pradesh 282002",
        "openingTime": "",
        "closingtime": "",
        "longitude":"27.194824",
        "latitude" :"78.008716",
        "products" :[
            {"productName": "Rice (Basmati)", "productPrice": 100, "discount": 0.2, "category": "Breakfast & Instant Food","rating":4.3,"img":rice_basmati},
            {"productName": "Wheat Flour (Atta)", "productPrice": 50, "discount": 1.5, "category": "Breakfast & Instant Food","rating":4.3,"img":wheat_flour},
            {"productName": "Lentils (Dal)", "productPrice": 80, "discount": 3.0, "category": "Breakfast & Instant Food","rating":4.3,"img":indian_lentil_dahl_masoor_dal},
            {"productName": "Sugar", "productPrice": 45, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":Sugar},
            {"productName": "Tea Leaves", "productPrice": 200, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":green_tea_leaves},
            {"productName": "Cooking Oil (Sunflower)", "productPrice": 150, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":Cooking_Oil_Sunflower},
            {"productName": "Salt", "productPrice": 20, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":salt},
            {"productName": "Spices (Mixed)", "productPrice": 250, "discount": 0.5, "category": "Breakfast & Instant Food","rating":4.3,"img":spices_mixed},
            {"productName": "Biscuits", "productPrice": 20, "discount": 2.5, "category": "Bakery & Biscuits","rating":4.3,"img":biscuits},
            {"productName": "Snacks (Namkeen)", "productPrice": 120, "discount": 0.9, "category": "Snacks & Munchies","rating":4.3,"img":Snacks_Namkeen},
            {"productName": "Soft Drinks", "productPrice": 40, "discount": 4.2, "category": "Cold Drinks & Juices","rating":4.3,"img":Soft_Drinks},
            {"productName": "Milk", "productPrice": 60, "discount": 1.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":milk},
            {"productName": "Bread", "productPrice": 30, "discount": 3.7, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"productName": "Eggs", "productPrice": 6, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"productName": "Soap (Lux)", "productPrice": 25, "discount": 1.2, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"productName": "Shampoo (Dove)", "productPrice": 150, "discount": 2.1, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"productName": "Toothpaste (Colgate)", "productPrice": 50, "discount": 0.4, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"productName": "Detergent Powder", "productPrice": 80, "discount": 2.8, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"productName": "Toilet Paper", "productPrice": 30, "discount": 1.6, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"productName": "Matches", "productPrice": 10, "discount": 0.3, "category": "Miscellaneous","rating":4.3,"img":chips},
            {"productName": "Cooking Sauce", "productPrice": 70, "discount": 0.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"productName": "Cereals", "productPrice": 90, "discount": 1.9, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Juice", "productPrice": 35, "discount": 2.4, "category": "Cold Drinks & Juices","rating":4.3,"img":chips},
            {"productName": "Yogurt", "productPrice": 45, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"productName": "Cheese", "productPrice": 80, "discount": 3.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"productName": "Butter", "productPrice": 55, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"productName": "Honey", "productPrice": 100, "discount": 1.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Jam", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Peanut Butter", "productPrice": 70, "discount": 2.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Canned Beans", "productPrice": 40, "discount": 0.9, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"productName": "Tomato Sauce", "productPrice": 25, "discount": 1.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"productName": "Pickles", "productPrice": 30, "discount": 3.1, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"productName": "Raisins", "productPrice": 65, "discount": 0.4, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"productName": "Almonds", "productPrice": 120, "discount": 1.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"productName": "Cashews", "productPrice": 150, "discount": 2.2, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"productName": "Pistachios", "productPrice": 200, "discount": 0.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"productName": "Oatmeal", "productPrice": 55, "discount": 2.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Pasta", "productPrice": 40, "discount": 1.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Rice (Non-Basmati)", "productPrice": 70, "discount": 0.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Cornflakes", "productPrice": 50, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"productName": "Coffee", "productPrice": 250, "discount": 4.5, "category": "Beverages","rating":4.3,"img":chips},
            {"productName": "Cookies", "productPrice": 30, "discount": 0.6, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"productName": "Chips", "productPrice": 25, "discount": 1.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"productName": "Cocoa Powder", "productPrice": 80, "discount": 3.2, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"productName": "Vinegar", "productPrice": 20, "discount": 0.5, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"productName": "Mustard", "productPrice": 15, "discount": 1.9, "category": "Cooking Essentials","rating":4.3,"img":chips}
          ]        
      },
      {
        "id": 2,
        "name": "Sharma Supermarket",
        "email": "sharmasupermarket@example.com",
        "phone": 9876543210,
        "address": "12A, Market Road, Gandhi Nagar, Delhi, Delhi 110001",
        "openingTime": "08:00 AM",
        "closingTime": "10:00 PM",
        "longitude": "28.6358",
        "latitude": "77.2245",
        "products": [
          {"productName": "Fresh Milk", "productPrice": 55, "discount": 1.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Paneer", "productPrice": 120, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Yogurt (Plain)", "productPrice": 40, "discount": 0.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Bread (Brown)", "productPrice": 35, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Eggs (Organic)", "productPrice": 8, "discount": 0.3, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Cereals (Corn Flakes)", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Butter (Salted)", "productPrice": 70, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Jam (Mixed Fruit)", "productPrice": 45, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Honey (Pure)", "productPrice": 150, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Tea Bags (Assam)", "productPrice": 120, "discount": 1.0, "category": "Beverages","rating":4.3,"img":chips}
        ]
      },
      {
        "id": 3,
        "name": "Patel Grocery Store",
        "email": "patelgrocery@example.com",
        "phone": 9876123450,
        "address": "2/4, Sardar Patel Marg, Rajaji Nagar, Bangalore, Karnataka 560010",
        "openingTime": "07:30 AM",
        "closingTime": "09:30 PM",
        "longitude": "12.9982",
        "latitude": "77.5895",
        "products": [
          {"productName": "Rice (Sona Masoori)", "productPrice": 85, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Wheat Flour (Chakki Fresh)", "productPrice": 40, "discount": 0.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Turmeric Powder", "productPrice": 30, "discount": 0.3, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"productName": "Red Chilli Powder", "productPrice": 50, "discount": 0.8, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"productName": "Ginger Garlic Paste", "productPrice": 35, "discount": 0.4, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"productName": "Onions", "productPrice": 30, "discount": 0.5, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"productName": "Potatoes", "productPrice": 25, "discount": 0.3, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"productName": "Tomatoes", "productPrice": 40, "discount": 0.7, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"productName": "Green Beans", "productPrice": 60, "discount": 1.2, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"productName": "Carrots", "productPrice": 35, "discount": 0.6, "category": "Fruits & Vegetables","rating":4.3,"img":chips}
        ]
      },
      {
        "id": 4,
        "name": "Singh's Fresh Mart",
        "email": "singhfreshmart@example.com",
        "phone": 9876541230,
        "address": "23, Green Avenue, Model Town, Ludhiana, Punjab 141002",
        "openingTime": "09:00 AM",
        "closingTime": "11:00 PM",
        "longitude": "30.9120",
        "latitude": "75.8533",
        "products": [
          {"productName": "Fresh Milk", "productPrice": 60, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Cheese (Cheddar)", "productPrice": 100, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Butter (Salted)", "productPrice": 70, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Eggs (Organic)", "productPrice": 10, "discount": 0.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Bread (Whole Wheat)", "productPrice": 40, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"productName": "Rice (Basmati)", "productPrice": 110, "discount": 2.5, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Pulses Mix", "productPrice": 90, "discount": 2.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"productName": "Cereal Bars (Mixed Fruit)", "productPrice": 25, "discount": 0.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"productName": "Chips (Potato)", "productPrice": 20, "discount": 0.3, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"productName": "Soft Drinks (Cola)", "productPrice": 30, "discount": 1.0, "category": "Cold Drinks & Juices","rating":4.3,"img":chips}
        ]
      }
   ]

export default shopperSampleData;