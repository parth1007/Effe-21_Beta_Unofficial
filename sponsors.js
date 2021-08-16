const sponsorContainer = document.querySelector(".sponsors-container");

const sponsorContent = {
  name: [
    "MTV Beats",
    "CocaCola",
    "Bingo",
    "RozDhan",
    "Zebronics",
    "RedFm",
    "Ankur Arora",
    "Honda",
    "Amul",
  ],
  imagePath: [
    "./img/sponsors/mtv.jpg",
    "./img/sponsors/cocacola.png",
    "./img/sponsors/bingo.png",
    "./img/sponsors/rozdhan.png",
    "./img/sponsors/zebronics.png",
    "./img/sponsors/redfm.png",
    "./img/sponsors/ankur.jpg",
    "./img/sponsors/honda.png",
    "./img/sponsors/amul.png",
  ],
  title: [
    "Powered By",
    "Associate Partner",
    "Entertainment Partner",
    "Official Infotainment Partner",
    "Audio Partner",
    "Radio Partner",
    "Clothing Partner",
    "Mobility Partner",
    "Dairy Partner",
  ],
};

for (let i = 0; i < sponsorContent.name.length; ++i) {
  sponsorContainer.innerHTML += `
<div class="sponsor-card">
  <img src="${sponsorContent.imagePath[i]}" />
  <br />
  <span class="sponsor-name"> ${sponsorContent.name[i]}</span>
  <span class="sponsor-title">${sponsorContent.title[i]}</span>
</div>
`;
}
