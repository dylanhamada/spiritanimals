/*
<div class="row">
    <div class="col me-4 profile-photo" id="forever-friend">
    </div>
    <div class="col d-flex flex-column justify-content-center">
        <span class="subtext fw-bold">Magoo, 5 years old</span>
        <span class="subtext">Likes long walks in the rain, chasing bicycles</span>
    </div>
</div>
*/

// Make every element have an id for easier selection
// Create a row div for each pet and populate it with child elements
// Row starts with first pet in array
// After load, setInterval to "slide" every 20 seconds
// To change, row slides down and fades within less than 1 sec
// Next row created with transparency, slides down and fades in within less than 1 sec

// Make array of pets with picture, name, and blurb
const pets = [
    {
        name: "Magoo",
        age: 5,
        blurb: "Likes long walks in the rain, chasing bicycles",
        image: "../assets/images/black-pug.jpg",
    },
    {
        name: "Isabel",
        age: 2,
        blurb: "Hates baths but loves long cuddles",
        image: "../assets/images/white-cat.jpg",
    },
    {
        name: "Dozer",
        age: 8,
        blurb: "Enjoys chew toys and goes through more than one a week",
        image: "../assets/images/zebra-dog.jpg",
    },
    {
        name: "Schumacher",
        age: 1,
        blurb: "Most at home in lukewarm waters under a nice lamp",
        image: "../assets/images/striped-turtle.jpg",
    },
    {
        name: "Atreyu",
        age: 3,
        blurb: "Favorite songs are the Macarena and Moon River",
        image: "../assets/images/white-cockatoo.jpg",
    },
];

