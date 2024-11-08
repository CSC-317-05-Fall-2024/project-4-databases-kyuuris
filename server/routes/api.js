import express from 'express';
const router = express.Router();
import {getRestaurants, createRestaurant, deleteRestaurant, getReviewsForRestaurant, getRestaurant} from "../data/restaurants.js";

router.get('/restaurants', async (req, res) => {
    const restaurants = await getRestaurants();
    res.render('restaurants', {restaurants});
});

router.get('/restaurants/:id', async (req, res) => {
    const restaurantId = req.params.id;

    const restaurant = await getRestaurant(restaurantId);
    const reviews = await getReviewsForRestaurant(restaurantId);

    res.render('restaurant-details', { restaurant, reviews });
});

router.post('/restaurants', async (req, res) => {
    const newRestaurant = req.body;
    try {
        const restaurant = await createRestaurant(newRestaurant)
        res.status(200).json(restaurant)
    } catch (error) {
        console.log(error)
        res.status(500).json({"messsage": `$({error}`})
    }
});

router.delete('/restaurants/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const restaurant = await deleteRestaurant(id);
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({"messsage": `$({error}`})
    }
});

export {router as backendRouter};