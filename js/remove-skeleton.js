const idSkeletonCards = document.getElementById("skeletonCardsArticleColumn");
const idCardFeeds = document.getElementById("cardsArticleColumn");

setTimeout(() => {
  idSkeletonCards.classList.add("disnone");
  idCardFeeds.classList.remove("disnone");
}, 1500);
