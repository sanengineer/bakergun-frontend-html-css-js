const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1`,
});

const loop = document.getElementById("akar");

const ppbox = document.createElement("div");
ppbox.setAttribute("class", "players-people-box");

loop.appendChild(ppbox);

api.get("/players").then((res) => {
  var json = res.data;

  json.forEach((blogpost) => {
    const ppboxlist = document.createElement("div");
    ppboxlist.setAttribute("class", "players-people-box-list");

    const firsttext = document.createElement("div");
    firsttext.setAttribute(
      "class",
      "first-text d-flex justify-content-between"
    );

    const secondtext = document.createElement("div");
    secondtext.setAttribute("class", "second-text");

    const thirdtext = document.createElement("div");
    thirdtext.setAttribute("class", "third-text");

    const imgbio = document.createElement("div");
    imgbio.setAttribute("class", "img-bio d-flex justify-content-between");

    const imgprofbox = document.createElement("div");
    imgprofbox.setAttribute("class", "image-profile-box");

    const imgprof = document.createElement("div");
    imgprof.setAttribute("class", "image-profile");

    const imgsrc = document.createElement("img");
    imgsrc.setAttribute("class", "img-src rounded-circle");
    imgsrc.setAttribute("width", 30);
    imgsrc.setAttribute("alt", "Picture Profile");
    imgsrc.src = blogpost.avatar;

    const biodsc = document.createElement("div");
    biodsc.setAttribute("class", "bio-desc pl-4");

    const bioname = document.createElement("div");
    bioname.setAttribute("class", "bio-name");
    bioname.textContent = blogpost.name;

    const biopro = document.createElement("div");
    biopro.setAttribute("class", "bio-pro");
    biopro.textContent = blogpost.jobs;

    const icotwt = document.createElement("div");
    icotwt.setAttribute("class", "logo-twt");

    const icotwtsrc = document.createElement("img");
    icotwtsrc.setAttribute("class", "logo-twt-src");
    icotwtsrc.setAttribute("width", 15);
    icotwtsrc.src = blogpost.avatar;

    const spntwotxt = document.createElement("span");
    blogpost.comment = blogpost.comment.substring(0, 44);
    spntwotxt.textContent = `${blogpost.comment}...`;

    // movie.comment = movie.comment.substring(0, 300);
    // p.textContent = `${movie.comment}...`;

    const spnthirdtxt = document.createElement("span");
    spnthirdtxt.textContent = blogpost.createdAt;

    ppbox.appendChild(ppboxlist);

    ppboxlist.appendChild(firsttext);
    ppboxlist.appendChild(secondtext);
    ppboxlist.appendChild(thirdtext);

    firsttext.appendChild(imgbio);
    firsttext.appendChild(icotwt);

    icotwt.appendChild(icotwtsrc);

    imgbio.appendChild(imgprofbox);
    imgprofbox.appendChild(imgprof);
    imgprof.appendChild(imgsrc);

    imgbio.appendChild(biodsc);

    biodsc.appendChild(bioname);
    biodsc.appendChild(biopro);

    secondtext.appendChild(spntwotxt);

    thirdtext.appendChild(spnthirdtxt);
  });

  console.log(json);
  console.log(c);
});
