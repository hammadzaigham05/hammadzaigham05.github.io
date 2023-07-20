const tabs = ["info", "grades", "extracurriculars", "hobbies"];
const tabElements = [
  ...document.getElementById("mainNav").getElementsByTagName("li"),
];

activateTab = (section) => {
  tabElements.forEach((element) => {
    element.classList.remove("active");
  });

  tabs.forEach((element) => {
    let tab = document.getElementById(element);
    tab.classList.remove("active");
  });

  let index = 0;
  for (index = 0; index < tabElements.length; index++) {
    const element = tabs[index];
    if (element == section) {
      break;
    }
  }

  let div = document.getElementById(section);
  div.classList.add("active");
  tabElements[index].classList.add("active");
};

const hobbies = [
  "photography",
  "coding",
  "weightlifting",
  "videogames",
  "movies",
];

const roundedNavElements = [
  ...document.getElementById("roundedNav").getElementsByTagName("li"),
];

activateHobby = (hobby) => {
  roundedNavElements.forEach((element) => {
    element.classList.remove("active");
  });

  hobbies.forEach((element) => {
    let tab = document.getElementById(element);
    tab.classList.remove("active");
  });
  let index = 0;
  for (index = 0; index < hobbies.length; index++) {
    const element = hobbies[index];
    if (element == hobby) {
      break;
    }
  }

  let section = document.getElementById(hobby);
  section.classList.add("active");
  roundedNavElements[index].classList.add("active");
};

// Make images non-draggable
let images = [...document.getElementsByTagName("img")];
images.forEach((image) => {
  image.setAttribute("draggable", "false");
});

// Image Display
let imgDisplay = document.getElementById("imgDisplay");
displayImg = () => {
  imgDisplay.classList.toggle("active");
};
