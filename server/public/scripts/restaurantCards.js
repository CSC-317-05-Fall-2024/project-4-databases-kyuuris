document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete_button");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const restaurantId = this.getAttribute("data-id");

            fetch(`/api/restaurants/${restaurantId}`, {
                method: 'DELETE'
            })
            .then(response => {
                    return response.json();
            })
            .then(data => {
                this.closest('.restaurant').remove();
            })
        });
    });
});
