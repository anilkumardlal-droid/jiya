const starsContainer = document.getElementById("stars");

for(let i = 0; i < 40; i++){
  const star = document.createElement("span");

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration = (20 + Math.random() * 30) + "s";

  starsContainer.appendChild(star);
}
