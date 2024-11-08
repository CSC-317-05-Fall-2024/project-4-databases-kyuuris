const headerElement = document.querySelector("header");
headerElement.innerHTML=`
    <div class="city">
        <img src="/images/elk_grove_landscape.png" />
        <h1>Elk Grove</h1>
    </div>
`;

const navElement = document.querySelector("nav");
navElement.innerHTML=`
    <div class="nav_bar">
        <a href="/">Home</a>
        <a href="/attractions">Attractions</a>
        <a href="/api/restaurants">Restaurants</a>
        <a href="/form">New Restaurant</a>
    </div>
`;

const footerElement = document.querySelector("footer");
footerElement.innerHTML=`
    <div class="footer">
        <p>Contact Information: kluong9@sfsu.edu</p>
    </div>
`;
