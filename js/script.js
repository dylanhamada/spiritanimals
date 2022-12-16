const petRows = [];
// array of pets with picture, name, and blurb
const pets = [
    {
        name: "Magoo",
        age: 5,
        description: "Likes long walks in the rain, chasing bicycles",
    },
    {
        name: "Isabel",
        age: 2,
        description: "Hates baths but loves long cuddles",
    },
    {
        name: "Dozer",
        age: 8,
        description: "Enjoys chew toys and goes through more than one a week",
    },
    {
        name: "Schumacher",
        age: 2,
        description: "Most at home in lukewarm waters under a nice lamp",
    },
    {
        name: "Atreyu",
        age: 3,
        description: "Favorite songs are the Macarena and Moon River",
    },
];

// take a pet object and create a row with nested elements
const makeRow = (pet, index) => {
    // create variables for each element
    const row = document.createElement("div");
    const profile = document.createElement("div");
    const blurb = document.createElement("div");
    const name = document.createElement("span");
    const description = document.createElement("span");

    // append text to span elements
    name.append(`${pet.name}, ${pet.age} years old`);
    description.append(pet.description);

    // add classes and styling to elements
    row.classList.add("row");
    profile.classList.add("col", "me-4", "profile-photo");
    profile.id = `forever-friend-${index + 1}`;
    blurb.classList.add("col", "d-flex", "flex-column", "justify-content-center");
    name.classList.add("subtext", "fw-bold");
    description.classList.add("subtext");

    // nest elements in their proper place
    blurb.append(name, description);
    row.append(profile, blurb);

    return row;
};

// populate petRows array by calling makeRow for each element in pets array
pets.forEach((pet, index) => {
    petRows.push(makeRow(pet, index));
})

// append first element of petRows to #pet-slider div on page load
const petSlider = document.querySelector("#pet-slider");
petSlider.append(petRows[0]);

// define child of #pet-slider
let petSlide = petSlider.children[0];

let slideNum = 0;
// every 10 seconds, change petSlide
setInterval(() => {
    petSlide.remove();

    slideNum++;
    if (slideNum > 4) slideNum = 0;

    setTimeout(() => {
        petSlider.append(petRows[slideNum]);
        petSlide = petSlider.children[0];
    }, 1000)
}, 10000)

// "animate" with CSS transitions
// in mobile screen, screen height adjusts in between slide changes