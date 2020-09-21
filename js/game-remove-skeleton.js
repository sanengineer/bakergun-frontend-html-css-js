const idGameMedia = document.getElementById("gameMedia");
const idSkeletonGameMedia = document.getElementById("skeletonGameMedia");

setTimeout(() => {
  idGameMedia.classList.remove("disnone");
  idSkeletonGameMedia.remove();
}, 2000);
