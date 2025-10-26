const year = document.getElementById("currentyear")

const today = new Date();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;