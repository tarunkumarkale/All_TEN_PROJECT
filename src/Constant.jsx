
import DICE from  './Images/DICE.png' 
import profileMenu from './Images/profileMenu.jpg'
import todoimg from './Images/todoimg.png'
import AUTHIMAGES from './Images/AUTHIMAGES.png'
import chat from './Images/chat.png'
import  fire from './Images/fire.webp'

const PROJECTS = [
  {
    projectname: "Dice", // Corrected the naming convention to camelCase for consistency
    linkofproject: "/start", // Changed key to camelCase and ensured the path is lowercase for consistency
    image: DICE // Assuming DICE is a valid variable containing the image
  },
  {
    projectname: "Hotel Menu", // Capitalized for readability
  linkofproject: "/menu", // Ensured the path is lowercase for consistency
    image:profileMenu // Assuming profileMenu is a valid variable containing the image
  },{
projectname:'Single curd',
linkofproject:'/SingledataCurd',
image:todoimg
  },
  {
    projectname:'All uses of firebase ',
    linkofproject: '/FullFirebse',
    image:AUTHIMAGES
  },
  {
    projectname:'useParams',
    linkofproject:'/Chatbot',
    image:chat
  },
  {
    projectname:'Passwordtoggle',
    linkofproject:'/Passwordtogg',
    image:chat
  },
  {
    projectname:'customhook',
    linkofproject:'/custom',
    image:todoimg
  }
  

];


export default PROJECTS;


export const AllImages= [{diceiamges:DICE}]
export const firee=fire

//////menu

export const menuResturent= [
    {
      "id": 1,
      "name": "Grilled Chicken Salad",
      "type": "Lunch",
      "price": 8.99
    },
    {
      "id": 2,
      "name": "Spaghetti Bolognese",
      "type": "Dinner",
      "price": 12.99
    },
    {
      "id": 3,
      "name": "Vegetable Stir Fry",
      "type": "Dinner",
      "price": 10.49
    },
    {
      "id": 4,
      "name": "Classic Cheeseburger",
      "type": "Lunch",
      "price": 9.99
    },
    {
      "id": 5,
      "name": "Pancake Breakfast",
      "type": "Breakfast",
      "price": 7.49
    },
    {
      "id": 6,
      "name": "Seafood Paella",
      "type": "Dinner",
      "price": 15.99
    },
    {
      "id": 7,
      "name": "Quinoa and Avocado Bowl",
      "type": "Lunch",
      "price": 11.49
    },
    {
      "id": 8,
      "name": "Margherita Pizza",
      "type": "Dinner",
      "price": 13.99
    },
    {
      "id": 9,
      "name": "Fruit Smoothie",
      "type": "Snack",
      "price": 5.99
    }
  ] 