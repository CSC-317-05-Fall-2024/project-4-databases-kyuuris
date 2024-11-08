/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => { 
    try {
        console.log('creating restaurant');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
            CREATE TABLE IF NOT EXISTS reviews (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                rating INT NOT NULL,
                content TEXT NOT NULL,
                restaurant_id INT NOT NULL,
                FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
            );
        `;
            await pool.query(createQuery);
            console.log('created restaurant');
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        const insertQuery = `
        INSERT INTO restaurants (name, phone, address, photo) VALUES
            ('Teacup', '(916) 627-1377', '8351 Elk Grove Blvd, Elk Grove, CA 95758', '/images/teacup.png'),
            ('Birria Boys', '(916) 616-7733', '9611 Auto Center Dr, Elk Grove, CA 95757', '/images/birria_boys.png'),
            ('Tea 18', '(916) 687-3484', '10043 Bruceville Rd Unit 100, Elk Grove, CA 95757', '/images/tea_18.png'),
            ('Dutch Bros', '(877) 899-2767', '8610 Elk Grove Blvd, Elk Grove, CA 95624', '/images/dutch_bros.png'),
            ('Tea Culture', '(916) 688-7177', '8433 Elk Grove Florin Rd, Elk Grove, CA 95624', '/images/tea_culture.png'),
            ('Bonchon', '(916) 684-6105', '8246 Laguna Blvd #370, Elk Grove, CA 95758', '/images/bonchon.png'),
            ('Ice Dream', '(916) 829-5366', '8775 Center Pkwy Suite E-200, Sacramento, CA 95823', '/images/ice_dream.png'),
            ('Tasty Pot', '(916) 896-1916', '8461 Elk Grove Blvd, Elk Grove, CA 95758', '/images/tasty_pot.png'),
            ('In n Out', '(800) 786-1000', '9188 E Stockton Blvd, Elk Grove, CA 95624', '/images/in_n_out.png');
        INSERT INTO reviews (rating, content, restaurant_id) VALUES
            (5, 'Good food and nice place', 1),
            (4, 'Good tea but needs more items', 1),
            (3, 'Food is kind of plain, but the service was good', 2),
            (5, 'Very quick service, and the food smelled amazing', 2)
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
