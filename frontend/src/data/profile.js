import techMart from '../assets/techmart.png'
import tv from '../assets/tv.jpg'
import lamp from '../assets/lamp.jpg'

const profile = {
  name: "TechMart Pvt Ltd",
  avatar: techMart,
  bio: "Leading wholesale distributor",
  stats: { products: 24, followers: 580, posts: 10 },
  products: [
    { id: 1, title: "Smart LED TV", price: 299, image: tv },
    { id: 2, title: "Desk Lamp", price: 35, image: lamp }
  ]
};


export default profile