const galleryMobile = document.querySelector(".gallery-mobile");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");

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

for (let i = galleryContent.imagePath.length / 2 - 1; i >= 0; --i) {
  slideLeft.innerHTML += `

  <div class ="gal-card ld${i + 1}" style="background-color: #061125">
  <h2 class ="gal-heading lh${i + 1}">${i + 1}. ${
    galleryContent.heading[i]
  }</h2>
  <p class ="gal-p lp${i + 1}">${galleryContent.paragraph[i]}</p>
  
  <img class ="gal-img" src="${galleryContent.imagePath[i]}"  />
</div>
`;
}

for (let i = 0; i < galleryContent.imagePath.length / 2; ++i) {
  slideRight.innerHTML += `

  <div class="gal-card rd${i + 1}" style="background-color: #444444">
  <h2 class="gal-heading rh${i + 1} in_view_right">${i + 1}. ${
    galleryContent.heading[i]
  }</h2>
  <p class="gal-p rp${i + 1} in_view_right-p">${galleryContent.paragraph[i]}</p>
  <img class="gal-img gal-img-right" src="${galleryContent.imagePath[i]}"  />
</div>

`;
}
