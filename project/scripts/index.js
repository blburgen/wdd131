const paintings = [
    {
        paintingName: "Ant Hill",
        year: "2022",
        width: 16,
        height: 20,
        medium: "Mixed Media/Oil Paint",
        artist: "Brady Burgener",
        descr: "All creatures (from the great blue whale down to the tiny ant) on this earth have to work to live. These tiny ants are working around their home.",
        imageUrl: "./images/ant_hill.jpg"
    },
    {
        paintingName: "Apple Blossom",
        year: "2022",
        width: 24,
        height: 18,
        medium: "Mixed Media ( Water Soluble Pastels, Acrylic Ink, Acrylic Paint, Oil Paint) on Watercolor Paper",
        artist: "Brady Burgener",
        descr: "With Springs comes the apple blossoms.",
        imageUrl: "./images/apple_blossom.jpg"
    },
    {
        paintingName: "At the Farm",
        year: "2022",
        width: 24,
        height: 36,
        medium: "Oil Paint",
        artist: "Brady Burgener",
        descr: "The ants are busy at their farm. They have a lot of work to do and don't have time to stop and talk to us.",
        imageUrl: "./images/at_the_farm.jpg"
    },
    {
        paintingName: "Beauty Through the Heart",
        year: "",
        width: 12,
        height: 6.5,
        medium: "Mixed Media/Oil Paint on Wood",
        artist: "Brady Burgener",
        descr: "Even the most gental flower can have a dark side.",
        imageUrl: "./images/beauty_heart.jpg"
    },
    {
        paintingName: "Black Rose",
        year: "2022",
        width: 16,
        height: 20,
        medium: "Oil Paint",
        artist: "Brady Burgener",
        descr: "The colors dance around this black rose.",
        imageUrl: "./images/black_rose.jpg"
    },
    {
        paintingName: "Chrysanthemum",
        year: "2022",
        width: 24,
        height: 18,
        medium: "Mixed Media ( Water Soluble Pastels, Acrylic Ink, Acrylic Paint, Oil Paint) on Watercolor Paper",
        artist: "Brady Burgener",
        descr: "During the summer we are given the privilege of smelling the chrysanthemums. In this image we see a group of chrysanthemum flower and insects against an abstract background.",
        imageUrl: "./images/chrysanthemum.jpg"
    },
    {
        paintingName: "Dancing Girl",
        year: "2022",
        width: 18,
        height: 24,
        medium: "Mixed Media ( Water Soluble Pastels, Acrylic Ink, Acrylic Paint, Oil Paint) on Watercolor Paper",
        artist: "Brady Burgener",
        descr: "If we listen to the songs in our heart, we will dance to it. In this image we see a girl dancing with a ribbon to the song in her heart.",
        imageUrl: "./images/dancing_girl.jpg"
    },
    {
        paintingName: "Fire Within",
        year: "",
        width: 4.5,
        height: 6,
        medium: "Watercolor on Watercolor Paper",
        artist: "Brady Burgener",
        descr: "As we watch the gental fire that lies within every living being.",
        imageUrl: "./images/fire_within.jpg"
    },
    {
        paintingName: "Nectar Source",
        year: "2022",
        width: 18,
        height: 24,
        medium: "Oil Paint",
        artist: "Brady Burgener",
        descr: "Water towers are often used to collect stores of water. What if instead of collecting water, it were to collect nectar. In this image we explore the possibility of a Nectar Source.",
        imageUrl: "./images/nectar_source.jpg"
    }
]

createArtCard(paintings);

function createArtCard(filteredArt){
  document.querySelector(".art").innerHTML = '';
  filteredArt.forEach(art => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let descp = document.createElement("p");
    let dimentions = document.createElement("p");
    let medium = document.createElement("p");
    let divimg = document.createElement("div");
    let img = document.createElement("img");

    name.textContent = art.paintingName;
    descp.textContent = art.descr;
    dimentions.innerHTML = `<span class="label">Dimentions(inch x inch):</span> ${art.width} X ${art.height}`;
    medium.innerHTML = `<span class="label">Medium:</span> ${art.medium}`;
    divimg.setAttribute("class", "artimg");
    img.setAttribute("src", art.imageUrl);
    img.setAttribute("title", `${art.paintingName}`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(descp)
    card.appendChild(dimentions);
    card.appendChild(medium);
    divimg.appendChild(img);
    card.appendChild(divimg);

    if (art.year != ""){
        let year = document.createElement("p");
        year.innerHTML = `<span class="label">Year:</span> ${art.year}`;
        card.appendChild(year);
    };

    document.querySelector(".art").appendChild(card);
  })
}

const all = document.getElementById("all");
const oil = document.getElementById("oil");
const water = document.getElementById("water");
const mixed = document.getElementById("mixed");

all.addEventListener("click", () =>{
  createArtCard(paintings);
  buttonactive(all);
});

oil.addEventListener("click", () => {
  createArtCard(paintings.filter(painting => painting.medium.slice(0,3).toLowerCase()=="oil"));
  buttonactive(oil);
});

water.addEventListener("click", () => {
  createArtCard(paintings.filter(painting => painting.medium.slice(0,5).toLowerCase()=="water"));
  buttonactive(water);
});

mixed.addEventListener("click", () => {
  createArtCard(paintings.filter(painting => painting.medium.slice(0,5).toLowerCase()=="mixed"));
  buttonactive(mixed);
});

function buttonactive(painttype){
    all.removeAttribute("class", "active");
    oil.removeAttribute("class", "active");
    water.removeAttribute("class", "active");
    mixed.removeAttribute("class", "active");
    painttype.setAttribute("class","active");
}
