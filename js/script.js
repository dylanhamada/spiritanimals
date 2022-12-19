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

// format each row and push them into petRows array
const makeSlides = () => {
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
        row.classList.add("row", "forever-friend-initial");
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
    });
};

// set initial slide, define slide in and out functions, and initiate slide loop
const slideShow = () => {
    const petSlider = document.querySelector("#pet-slider");
    let currentSlide = 0;
    let nextSlide = 1;

    // display initial slide
    const initialSlide = slide => {
        petSlider.append(slide);
        slide.style.opacity = 1;
        slide.style.transform = "translateY(0rem)";
    };

    // move next slide into view
    const slideIn = slide => {
        petSlider.append(slide);
        new Promise(resolve => {
            setTimeout(() => {
                slide.style.opacity = 1;
                slide.style.transform = "translateY(0rem)";
                resolve("Slide added");
            }, 100);
        })
    };

    // move current slide out of view
    const slideOut = slide => {
        slide.style.opacity = 0;
        slide.style.transform = "translateY(2rem)";
        if (currentSlide === 4) {
            currentSlide = 0;
            nextSlide = 1;
        }
        else {
            currentSlide++;
            nextSlide++;
        }
        return new Promise(resolve => {
            setTimeout(() => {
                slide.remove();
                slide.style.transform = "translateY(-2rem)";
                resolve("Slide removed");
            }, 800);
        });
    };

    // unload then laod slides
    const slideLoop = async () => {
        await slideOut(petSlider.children[0]);
        slideIn(petRows.slice(currentSlide, nextSlide)[0]);
    };

    initialSlide(petRows.slice(0, 1)[0]);

    // loop slides every 5 seconds
    setInterval(() => {
        slideLoop();
    }, 8000);
}

makeSlides();
slideShow();