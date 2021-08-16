const galleryMobile = document.querySelector(".gallery-mobile");
console.log("From gallery.js");
const galleryContent = {
  imagePath: [
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
  ],
  heading: [
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
    "Neeti Mohan",
  ],
  paragraph: [
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
    "2020",
  ],
};

for (let i = 0; i < galleryContent.imagePath.length; ++i) {
  galleryMobile.innerHTML += `
    <div >
      <center>
          <h2>${i + 1} ${galleryContent.heading[i]}</h2>
          <p>${galleryContent.paragraph[i]}</p>
          <img src= '${galleryContent.imagePath[i]}'/>
      </center>
    </div>
    `;
}
