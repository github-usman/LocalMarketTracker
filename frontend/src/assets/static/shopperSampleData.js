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
            {"id":1, "productName": "Rice (Basmati)", "productPrice": 100, "discount": 0.2, "category": "Breakfast & Instant Food","rating":4.3,"img":rice_basmati},
            {"id":1, "productName": "Wheat Flour (Atta)", "productPrice": 50, "discount": 1.5, "category": "Breakfast & Instant Food","rating":4.3,"img":wheat_flour},
            {"id":1, "productName": "Lentils (Dal)", "productPrice": 80, "discount": 3.0, "category": "Breakfast & Instant Food","rating":4.3,"img":indian_lentil_dahl_masoor_dal},
            {"id":1, "productName": "Sugar", "productPrice": 45, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":Sugar},
            {"id":1, "productName": "Tea Leaves", "productPrice": 200, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":green_tea_leaves},
            {"id":1, "productName": "Cooking Oil (Sunflower)", "productPrice": 150, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":Cooking_Oil_Sunflower},
            {"id":1, "productName": "Salt", "productPrice": 20, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":salt},
            {"id":1, "productName": "Spices (Mixed)", "productPrice": 250, "discount": 0.5, "category": "Breakfast & Instant Food","rating":4.3,"img":spices_mixed},
            {"id":1, "productName": "Biscuits", "productPrice": 20, "discount": 2.5, "category": "Bakery & Biscuits","rating":4.3,"img":biscuits},
            {"id":1, "productName": "Snacks (Namkeen)", "productPrice": 120, "discount": 0.9, "category": "Snacks & Munchies","rating":4.3,"img":Snacks_Namkeen},
            {"id":1, "productName": "Soft Drinks", "productPrice": 40, "discount": 4.2, "category": "Cold Drinks & Juices","rating":4.3,"img":Soft_Drinks},
            {"id":1, "productName": "Milk", "productPrice": 60, "discount": 1.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":milk},
            {"id":1, "productName": "Bread", "productPrice": 30, "discount": 3.7, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"id":1, "productName": "Eggs", "productPrice": 6, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"id":1, "productName": "Soap (Lux)", "productPrice": 25, "discount": 1.2, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"id":1, "productName": "Shampoo (Dove)", "productPrice": 150, "discount": 2.1, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"id":1, "productName": "Toothpaste (Colgate)", "productPrice": 50, "discount": 0.4, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"id":1, "productName": "Detergent Powder", "productPrice": 80, "discount": 2.8, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"id":1, "productName": "Toilet Paper", "productPrice": 30, "discount": 1.6, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"id":1, "productName": "Matches", "productPrice": 10, "discount": 0.3, "category": "Miscellaneous","rating":4.3,"img":chips},
            {"id":1, "productName": "Cooking Sauce", "productPrice": 70, "discount": 0.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"id":1, "productName": "Cereals", "productPrice": 90, "discount": 1.9, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Juice", "productPrice": 35, "discount": 2.4, "category": "Cold Drinks & Juices","rating":4.3,"img":chips},
            {"id":1, "productName": "Yogurt", "productPrice": 45, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"id":1, "productName": "Cheese", "productPrice": 80, "discount": 3.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"id":1, "productName": "Butter", "productPrice": 55, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"id":1, "productName": "Honey", "productPrice": 100, "discount": 1.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Jam", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Peanut Butter", "productPrice": 70, "discount": 2.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Canned Beans", "productPrice": 40, "discount": 0.9, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"id":1, "productName": "Tomato Sauce", "productPrice": 25, "discount": 1.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"id":1, "productName": "Pickles", "productPrice": 30, "discount": 3.1, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"id":1, "productName": "Raisins", "productPrice": 65, "discount": 0.4, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"id":1, "productName": "Almonds", "productPrice": 120, "discount": 1.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"id":1, "productName": "Cashews", "productPrice": 150, "discount": 2.2, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"id":1, "productName": "Pistachios", "productPrice": 200, "discount": 0.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"id":1, "productName": "Oatmeal", "productPrice": 55, "discount": 2.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Pasta", "productPrice": 40, "discount": 1.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Rice (Non-Basmati)", "productPrice": 70, "discount": 0.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Cornflakes", "productPrice": 50, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"id":1, "productName": "Coffee", "productPrice": 250, "discount": 4.5, "category": "Beverages","rating":4.3,"img":chips},
            {"id":1, "productName": "Cookies", "productPrice": 30, "discount": 0.6, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"id":1, "productName": "Chips", "productPrice": 25, "discount": 1.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"id":1, "productName": "Cocoa Powder", "productPrice": 80, "discount": 3.2, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"id":1, "productName": "Vinegar", "productPrice": 20, "discount": 0.5, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"id":1, "productName": "Mustard", "productPrice": 15, "discount": 1.9, "category": "Cooking Essentials","rating":4.3,"img":chips}
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
          {"id":2, "productName": "Fresh Milk", "productPrice": 55, "discount": 1.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Paneer", "productPrice": 120, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Yogurt (Plain)", "productPrice": 40, "discount": 0.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Bread (Brown)", "productPrice": 35, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Eggs (Organic)", "productPrice": 8, "discount": 0.3, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Cereals (Corn Flakes)", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":2, "productName": "Butter (Salted)", "productPrice": 70, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":2, "productName": "Jam (Mixed Fruit)", "productPrice": 45, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":2, "productName": "Honey (Pure)", "productPrice": 150, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":2, "productName": "Tea Bags (Assam)", "productPrice": 120, "discount": 1.0, "category": "Beverages","rating":4.3,"img":chips}
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
          {"id":3, "productName": "Rice (Sona Masoori)", "productPrice": 85, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":3, "productName": "Wheat Flour (Chakki Fresh)", "productPrice": 40, "discount": 0.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":3, "productName": "Turmeric Powder", "productPrice": 30, "discount": 0.3, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Red Chilli Powder", "productPrice": 50, "discount": 0.8, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Ginger Garlic Paste", "productPrice": 35, "discount": 0.4, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Onions", "productPrice": 30, "discount": 0.5, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Potatoes", "productPrice": 25, "discount": 0.3, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Tomatoes", "productPrice": 40, "discount": 0.7, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Green Beans", "productPrice": 60, "discount": 1.2, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Carrots", "productPrice": 35, "discount": 0.6, "category": "Fruits & Vegetables","rating":4.3,"img":chips}
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
          {"id":4, "productName": "Fresh Milk", "productPrice": 60, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":4, "productName": "Cheese (Cheddar)", "productPrice": 100, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":4, "productName": "Butter (Salted)", "productPrice": 70, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":4, "productName": "Eggs (Organic)", "productPrice": 10, "discount": 0.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":4, "productName": "Bread (Whole Wheat)", "productPrice": 40, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"id":4, "productName": "Rice (Basmati)", "productPrice": 110, "discount": 2.5, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":4, "productName": "Pulses Mix", "productPrice": 90, "discount": 2.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":4, "productName": "Cereal Bars (Mixed Fruit)", "productPrice": 25, "discount": 0.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"id":4, "productName": "Chips (Potato)", "productPrice": 20, "discount": 0.3, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"id":4, "productName": "Soft Drinks (Cola)", "productPrice": 30, "discount": 1.0, "category": "Cold Drinks & Juices","rating":4.3,"img":chips}
        ]
      }
   ]

export default shopperSampleData;