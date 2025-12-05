const paintings = [
    {
        paintingName: "Ant Hill",
        year: "",
        width: 16,
        height: 20,
        medium: "Mixed Media/Oil Paint",
        artist: "Brady Burgener",
        descr: "All creatures (from the great blue whale down to the tiny ant) on this earth have to work to live. These tiny ants are working around their home.",
        imageUrl: "https://drive.google.com/file/d/18M6UTkK1cn0my8l3vbo8z6sw3T4CtDwz/preview"
    },
    {
        paintingName: "Apple Blossom",
        year: "",
        width: 24,
        height: 18,
        medium: "Mixed Media ( Water Soluble Pastels, Acrylic Ink, Acrylic Paint, Oil Paint) on Watercolor Paper",
        artist: "Brady Burgener",
        descr: "https://drive.google.com/file/d/1edXaiFk23C_eUneiW84JdmpgSV1PoFEA/preview",
        imageUrl: "https://drive.google.com/file/d/1edXaiFk23C_eUneiW84JdmpgSV1PoFEA/preview"
    },
    {
        paintingName: "Black Rose",
        year: "",
        width: 16,
        height: 20,
        medium: "Oil Paint",
        artist: "Brady Burgener",
        imageUrl: "https://drive.google.com/file/d/1JxPrkkyepTM_knJKKNYJgHHy0qpywLFE/preview"
    },
    {
        paintingName: "Nectar Source",
        year: "",
        width: 18,
        height: 24,
        medium: "Oil Paint",
        artist: "Brady Burgener",
        descr: "Water towers are often used to collect stores of water. What if instead of collecting water, it were to collect nectar. In this image we explore the possibility of a Nectar Source.",
        imageUrl: "https://drive.google.com/file/d/1LuFp9uTcDYnjKC4xWcHA7Ed0Q4dzeDEU/preview"
    }
]

createArtCard(paintings);

function createArtCard(filteredArt){
  document.querySelector(".art").innerHTML = '';
  filteredArt.forEach(art => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let dimentions = document.createElement("p");
    let medium = document.createElement("p");
    let divimg = document.createElement("div");
    let img = document.createElement("iframe");

    name.textContent = art.paintingName;
    
    dimentions.innerHTML = `<span class="label">Dimentions:</span> ${art.width} X ${art.height}`;
    medium.innerHTML = `<span class="label">medium:</span> ${art.medium}`;
    divimg.setAttribute("class", "artimg");
    img.setAttribute("src", art.imageUrl);
    img.setAttribute("title", `${art.paintingName}`);
    img.setAttribute("width", 300);
    img.setAttribute("height", 400);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
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
