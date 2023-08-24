const url = "https://api.thedogapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");

// Add click event listener to the button
button.addEventListener("click", getRandomDogs);

// Define the function to handle the random dog photo
function randomDogPhoto(json) {
  let photo = json[0].url;

  // Clear any existing content in the section
  section.innerHTML = "";

  // Add the "dogs" class to the section for styling
  section.classList.add("dogs");

  // Create an image element
  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_dogs"); // Add class for styling
  image.alt = "Random Dog"; // Provide an alt text for accessibility
  section.appendChild(image); // Append the image to the section
}

// Define the async function to fetch and display random dog photo
async function getRandomDogs() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    randomDogPhoto(json); // Call the function to display the photo
  } catch (error) {
    console.log("An error occurred:", error);
  }
}











// const url = "https://api.thedogapi.com/v1/images/search";
// const section = document.querySelector(".container");
// const button = document.querySelector(".btn");

// button.addEventListener("click", getRandomCats);

// randomCatPhoto = (json) => {
//   let photo = json[0].url;
//   section.classList.add("cats");

//   let image = document.createElement("img");
//   image.src = photo;
//   image.classList.add("random_cats");
//   image.alt = photo;
//   section.appendChild(image);
// };

// async function getRandomCats() {
//   section.innerHTML = "";
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log("JSON:", json);
//     return randomCatPhoto(json);
//   } catch (e) {
//     console.log("This is an error");
//     console.log(e);
//   }
// }
