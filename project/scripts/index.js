const year = document.getElementById("currentyear")

const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

const paintings = [
    {
        paintingName: "Nectar Source",
        year: "",
        width: 18,
        height: 24,
        medium: "oil",
        artist: "Brady Burgener",
        descr: "Water towers are often used to collect stores of water. What if instead of collecting water, it were to collect nectar. In this image we explore the possibility of a Nectar Source.",
        imageUrl: "https://drive.google.com/file/d/1LuFp9uTcDYnjKC4xWcHA7Ed0Q4dzeDEU/view?usp=sharing"
    },
    {
        paintingName: "Black Rose",
        year: "",
        width: 16,
        height: 20,
        medium: "oil",
        artist: "Brady Burgener",
        imageUrl: "https://drive.google.com/file/d/1JxPrkkyepTM_knJKKNYJgHHy0qpywLFE/view?usp=sharing"
    }
]