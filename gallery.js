const galleryMobile = document.querySelector(".gallery-mobile");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");

const galleryContent = {
  headingLeft: [
    "Mariana bo",
    "Neeti Mohan",
    "Anubhav Singh Bassi",
    "Ritviz",
    "When Chai met Toast",
  ],
  imagePathLeft: [
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
  ],
  paragraphLeft: ["2020", "2019", "2019", "2018", "2018"],
  headingRight: [
    "Vishal Mishra",
    "Farhan Akhtar",
    "Akash Gupta",
    "The Local Train",
    "Zephyrtone",
  ],
  imagePathRight: [
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
    "./img/effe/images/gallery/neeti4.JPG",
  ],

  paragraphRight: ["2020", "2017", "2018", "2018", "2018"],
};

for (let i = galleryContent.headingLeft.length - 1; i >= 0; --i) {
  slideLeft.innerHTML += `

  <div class ="gal-card" ${
    i % 2 === 0
      ? 'style="background-color: #061125"'
      : 'style="background-color: #444444 "'
  }>
  <h2 class ="gal-heading lh lh${i+1}"> ${galleryContent.headingLeft[i]}</h2>
  <p class ="gal-p lp">${galleryContent.paragraphLeft[i]}</p>
  
  <img class ="gal-img" src="${galleryContent.imagePathLeft[i]}"  />
</div>
`;
}

for (let i = 0; i < galleryContent.headingRight.length; ++i) {
  slideRight.innerHTML += `

  <div class="gal-card"  ${
    i % 2 === 0
      ? 'style="animation: col-change 1.5s linear; animation-fill-mode: forwards;"'
      : '"style="background-color: #061125"'
  }>
  <h2 class="gal-heading rh rh${i+1}"> ${galleryContent.headingRight[i]}</h2>
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
          <img src= '${galleryContent.imagePathLeft[i]}' class="gal-mob-img"/>
        </div>
        <div>
          <h2>${galleryContent.headingRight[i]}</h2>
          <p>${galleryContent.paragraphRight[i]}</p>
          <img src= '${galleryContent.imagePathRight[i]}' class="gal-mob-img"/>
        </div>
      </center>
    `;
}
