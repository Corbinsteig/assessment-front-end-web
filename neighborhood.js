const restaurants = [`Barney's Italian Restaruant`, `Luigi's pizza`, `Rogelio's Tacos`]
const random = Math.floor(Math.random() * restaurants.length);

let randRestaurant = document.querySelector('button#random')

function giveRestaurant(event) {
    event.preventDefault();
   alert(restaurants[random]) 
}
randRestaurant.addEventListener('click', giveRestaurant)
