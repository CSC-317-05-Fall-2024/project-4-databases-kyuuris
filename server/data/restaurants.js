import { pool } from '../config/database.js'

const getRestaurants = async () => {
    try {
        const results = await pool.query(`SELECT * FROM restaurants ORDER BY id ASC`)
        return results.rows;
    } catch (error) {
        console.error(error.message)
    }
};

const getRestaurant = async (id) => {
    try {
        const result = await pool.query(`SELECT * FROM restaurants WHERE id = $1`, [id])
        return result.rows[0];
    } catch (error) {
        console.error(error.message)
    }
};

const createRestaurant = async (newRestaurant) => {
    try {
        const { name, phone, address, photo } = newRestaurant;
        const results = await pool.query(`INSERT INTO restaurants (name, phone, address, photo) VALUES ($1, $2, $3, $4) RETURNING *`, [name, phone, address, photo]);
        console.log(results)
        return results.rows[0];
    } catch (error){
        console.error(error.message)
    }
};

const deleteRestaurant = async (id) => {
    try {
        const results = await pool.query(`DELETE FROM restaurants WHERE id = $1`, [id])
        return results.rows;
    } catch (error) {
        console.error(error.message)
    }

};

const getReviewsForRestaurant = async (id) => {
    try {
        const query = `SELECT * FROM reviews WHERE restaurant_id = $1`;
        const result = await pool.query(query, [id]);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, getReviewsForRestaurant };