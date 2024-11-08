const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const photo = form.photo.value;

    const newRestaurant = {
        name,
        phone,
        address,
        photo
    };

    fetch('/api/restaurants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
    });

};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new_restaurant_form');
    form.addEventListener('submit', handleSubmit);
});
