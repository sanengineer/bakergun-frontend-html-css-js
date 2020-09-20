const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1`,
});

const loopblog = document.getElementById("cardsArticleColumn");

const cardfeeds = document.createElement("div");
cardfeeds.setAttribute("class", "card-feeds");

loopblog.appendChild(cardfeeds);

api.get("/blog").then((res) => {
  var json = res.data;

  json.forEach((blogpost) => {
    const artic = document.createElement("article");
    artic.setAttribute("class", "san-post-card");

    const snpcardimg = document.createElement("img");
    snpcardimg.setAttribute("class", "san-post-card-img");
    snpcardimg.src = blogpost.featImageUrl;

    const snpcardcontent = document.createElement("div");
    snpcardcontent.setAttribute("class", "san-post-card-content");

    const snpcardlink = document.createElement("div");
    snpcardlink.setAttribute("class", "san-post-card-link");

    const snpcardfooter = document.createElement("div");
    snpcardfooter.setAttribute("class", "san-post-card-footer");

    const snpcardh2 = document.createElement("div");
    snpcardh2.setAttribute("class", "san-post-card-h2");

    const snpcardexcerpt = document.createElement("div");
    snpcardexcerpt.setAttribute("class", "san-post-card-excerpt");

    const h2 = document.createElement("h2");
    h2.textContent = blogpost.title;

    const p = document.createElement("p");
    blogpost.paragraph = blogpost.paragraph.substring(0, 60);
    p.textContent = `${blogpost.paragraph}...`;

    const ava = document.createElement("div");
    ava.setAttribute("class", "san-ava");

    const avaimgsrc = document.createElement("img");
    avaimgsrc.setAttribute("alt", "Avatar Author");
    avaimgsrc.src = blogpost.avatar;

    const snauthcatrdtime = document.createElement("div");
    snauthcatrdtime.setAttribute("class", "sn-authname-cat-rdtime");

    const authorname = document.createElement("span");
    authorname.setAttribute("class", "author-name");
    authorname.textContent = blogpost.author;

    const datepost = document.createElement("div");
    datepost.setAttribute("class", "date-post");
    datepost.textContent = blogpost.dateCreatePost;

    cardfeeds.appendChild(artic);

    artic.appendChild(snpcardimg);
    artic.appendChild(snpcardcontent);

    snpcardcontent.appendChild(snpcardlink);
    snpcardcontent.appendChild(snpcardfooter);

    snpcardlink.appendChild(snpcardh2);
    snpcardlink.appendChild(snpcardexcerpt);

    snpcardh2.appendChild(h2);
    snpcardexcerpt.appendChild(p);

    snpcardfooter.appendChild(ava);
    snpcardfooter.appendChild(snauthcatrdtime);

    snauthcatrdtime.appendChild(authorname);
    snauthcatrdtime.appendChild(datepost);

    ava.appendChild(avaimgsrc);

    // Cek Respon Data
    // console.log(json);
  });
});
