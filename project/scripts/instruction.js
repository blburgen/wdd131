const trainings = [
  {
    id: "oil",
    name: "Oil painting class"
  },
  {
    id: "water",
    name: "Watercolor painting class"
  },
  {
    id: "out",
    name: "Outside painting class"
  },
  {
    id: "figure",
    name: "Figure painting class"
  },
  {
    id: "fdraw",
    name: "Figure drawing class"
  }
];

let training = document.getElementById("training");

if (training !== null){
  for (item of trainings){
    let option = document.createElement("option")
    option.value = item["id"]
    option.textContent = item["name"]
    training.appendChild(option)
  }
}

let thankyou = document.querySelector(".thankyou")

if(thankyou !== null){
  let num = 1;
  document.addEventListener("DOMContentLoaded", () =>{
    const storedCount = localStorage.getItem('trainingSubmittedCount');

    if (storedCount !== null){
      num += parseInt(storedCount);
      localStorage.setItem('trainingSubmittedCount',num.toString());
    } else {
      localStorage.setItem('trainingSubmittedCount', '1');
    }
    thankyou.innerHTML = `Thank you!  You have submitted ${num} training request(s).`;
  })
}

