// const loopblog = document.getElementById("cardsArticleColumn");

const skeletoncardfeeds = document.createElement("div");
skeletoncardfeeds.setAttribute("class", "skeleton-card-feeds");
skeletoncardfeeds.setAttribute("id", "skeletonCards");

loopblog.appendChild(skeletoncardfeeds);

// setTimeout(() => {
//   var i = [1, 2, 3, 4, 5, 6];

//   i.forEach(() => {
//     const skeletonartic = document.createElement("article");
//     skeletonartic.setAttribute("class", "skeleton-san-post-card");

//     const skeletonsnpcardimg = document.createElement("img");
//     skeletonsnpcardimg.setAttribute("class", "skeleton-san-post-card-img");

//     const skeletonsnpcardcontent = document.createElement("div");
//     skeletonsnpcardcontent.setAttribute(
//       "class",
//       "skeleton-san-post-card-content"
//     );

//     const skeletonsnpcardlink = document.createElement("div");
//     skeletonsnpcardlink.setAttribute("class", "skeleton-san-post-card-link");

//     const skeletonsnpcardfooter = document.createElement("div");
//     skeletonsnpcardfooter.setAttribute(
//       "class",
//       "skeleton-san-post-card-footer"
//     );

//     const skeletonsnpcardh2 = document.createElement("div");
//     skeletonsnpcardh2.setAttribute("class", "skeleton-san-post-card-h2");

//     const skeletonsnpcardexcerpt = document.createElement("div");
//     skeletonsnpcardexcerpt.setAttribute(
//       "class",
//       "skeleton-san-post-card-excerpt"
//     );

//     const skeletonh2 = document.createElement("h2");

//     const skeletonp = document.createElement("p");

//     const skeletonava = document.createElement("div");
//     skeletonava.setAttribute("class", "skeleton-san-ava");

//     const skeletonavaimgsrc = document.createElement("img");
//     skeletonavaimgsrc.setAttribute("alt", "Avatar Author");

//     const skeletonsnauthcatrdtime = document.createElement("div");
//     skeletonsnauthcatrdtime.setAttribute(
//       "class",
//       "skeleton-sn-authname-cat-rdtime"
//     );

//     const skeletonauthorname = document.createElement("span");
//     skeletonauthorname.setAttribute("class", "skeleton-author-name");

//     const skeletondatepost = document.createElement("div");
//     skeletondatepost.setAttribute("class", "skeleton-date-post");

//     skeletoncardfeeds.appendChild(skeletonartic);

//     skeletonartic.appendChild(skeletonsnpcardimg);
//     skeletonartic.appendChild(skeletonsnpcardcontent);

//     skeletonsnpcardcontent.appendChild(skeletonsnpcardlink);
//     skeletonsnpcardcontent.appendChild(skeletonsnpcardfooter);

//     skeletonsnpcardlink.appendChild(skeletonsnpcardh2);
//     skeletonsnpcardlink.appendChild(skeletonsnpcardexcerpt);

//     skeletonsnpcardh2.appendChild(skeletonh2);
//     skeletonsnpcardexcerpt.appendChild(skeletonp);

//     skeletonsnpcardfooter.appendChild(skeletonava);
//     skeletonsnpcardfooter.appendChild(skeletonsnauthcatrdtime);

//     skeletonsnauthcatrdtime.appendChild(skeletonauthorname);
//     skeletonsnauthcatrdtime.appendChild(skeletondatepost);

//     skeletonava.appendChild(skeletonavaimgsrc);
//   });
//   setTimeout(() => {
//     document.getElementById("skeletonCards").remove();
//   }, 60000);
// }, 500);

var i = [1, 2, 3, 4, 5, 6];

i.forEach(() => {
  const skeletonartic = document.createElement("article");
  skeletonartic.setAttribute("class", "skeleton-san-post-card");

  const skeletonsnpcardimg = document.createElement("div");
  skeletonsnpcardimg.setAttribute("class", "skeleton-san-post-card-img");

  const skeletonsnpcardcontent = document.createElement("div");
  skeletonsnpcardcontent.setAttribute(
    "class",
    "skeleton-san-post-card-content"
  );

  const skeletonsnpcardlink = document.createElement("div");
  skeletonsnpcardlink.setAttribute("class", "skeleton-san-post-card-link");

  const skeletonsnpcardfooter = document.createElement("div");
  skeletonsnpcardfooter.setAttribute("class", "skeleton-san-post-card-footer");

  const skeletonsnpcardh2 = document.createElement("div");
  skeletonsnpcardh2.setAttribute("class", "skeleton-san-post-card-h2");

  const skeletonsnpcardexcerpt = document.createElement("div");
  skeletonsnpcardexcerpt.setAttribute(
    "class",
    "skeleton-san-post-card-excerpt"
  );

  const skeletonh2 = document.createElement("h2");

  const skeletonp = document.createElement("p");

  const skeletonava = document.createElement("div");
  skeletonava.setAttribute("class", "skeleton-san-ava");

  //   const skeletonavaimgsrc = document.createElement("img");
  //   skeletonavaimgsrc.setAttribute("alt", "Avatar Author");

  const skeletonsnauthcatrdtime = document.createElement("div");
  skeletonsnauthcatrdtime.setAttribute(
    "class",
    "skeleton-sn-authname-cat-rdtime"
  );

  const skeletonauthorname = document.createElement("div");
  skeletonauthorname.setAttribute("class", "skeleton-author-name");

  const skeletondatepost = document.createElement("div");
  skeletondatepost.setAttribute("class", "skeleton-date-post");

  skeletoncardfeeds.appendChild(skeletonartic);

  skeletonartic.appendChild(skeletonsnpcardimg);
  skeletonartic.appendChild(skeletonsnpcardcontent);

  skeletonsnpcardcontent.appendChild(skeletonsnpcardlink);
  skeletonsnpcardcontent.appendChild(skeletonsnpcardfooter);

  skeletonsnpcardlink.appendChild(skeletonsnpcardh2);
  skeletonsnpcardlink.appendChild(skeletonsnpcardexcerpt);

  skeletonsnpcardh2.appendChild(skeletonh2);
  skeletonsnpcardexcerpt.appendChild(skeletonp);

  skeletonsnpcardfooter.appendChild(skeletonava);
  skeletonsnpcardfooter.appendChild(skeletonsnauthcatrdtime);

  skeletonsnauthcatrdtime.appendChild(skeletonauthorname);
  skeletonsnauthcatrdtime.appendChild(skeletondatepost);

  //   skeletonava.appendChild(skeletonavaimgsrc);
});
