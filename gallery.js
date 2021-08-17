const galleryMobile = document.querySelector(".gallery-mobile");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");

const galleryContent = {
  headingLeft: [
    "Left - 1. Neeti Mohan",
    "Left - 2. Neeti Mohan",
    "Left - 3. Neeti Mohan",
    "Left - 4.Neeti Mohan",
    "Left - 5. Neeti Mohan",
  ],
  imagePathLeft: [
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
  ],
  paragraphLeft: ["2020", "2020", "2020", "2020", "2020"],
  headingRight: [
    "Right -1.  Neeti Mohan",
    "Right -2. Neeti Mohan",
    "Right -3.  Neeti Mohan",
    "Right -4.  Neeti Mohan",
    "Right -5.  Neeti Mohan",
  ],
  imagePathRight: [
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
  ],

  paragraphRight: ["2020", "2020", "2020", "2020", "2020"],
};

for (let i = galleryContent.headingLeft.length - 1; i >= 0; --i) {
  slideLeft.innerHTML += `

  <div class ="gal-card" ${
    i % 2 === 0
      ? 'style="background-color: #061125"'
      : 'style="background-color: #444444"'
  }>
  <h2 class ="gal-heading lh"> ${galleryContent.headingLeft[i]}</h2>
  <p class ="gal-p lp">${galleryContent.paragraphLeft[i]}</p>
  
  <img class ="gal-img" src="${galleryContent.imagePathLeft[i]}"  />
</div>
`;
}

for (let i = 0; i < galleryContent.headingRight.length; ++i) {
  slideRight.innerHTML += `

  <div class="gal-card"  ${
    i % 2 === 0
      ? 'style="background-color: #444444"'
      : '"style="background-color: #061125"'
  }>
  <h2 class="gal-heading rh"> ${galleryContent.headingRight[i]}</h2>
  <p class="gal-p rp ">${galleryContent.paragraphRight[i]}</p>
  <img class="gal-img gal-img-right" src="${
    galleryContent.imagePathRight[i]
  }"  />
</div>

`;
}

for (let i = 0; i < galleryContent.headingLeft.length; ++i) {
  galleryMobile.innerHTML += `
      <center>
        <div >      
          <h2>${galleryContent.headingLeft[i]}</h2>
          <p>${galleryContent.paragraphLeft[i]}</p>
          <img src= '${galleryContent.imagePathLeft[i]}'/>
        </div>
        <div>
          <h2>${galleryContent.headingRight[i]}</h2>
          <p>${galleryContent.paragraphRight[i]}</p>
          <img src= '${galleryContent.imagePathRight[i]}'/>
        </div>
      </center>
    `;
}
