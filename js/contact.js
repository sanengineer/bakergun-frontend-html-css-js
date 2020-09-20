const req = new XMLHttpRequest();
const contFeatImg = document.getElementById("sectionNewLettFeatureImage");
const contactPageBgBottom = document.getElementById("contactPageFootBg");
const apiv1 = "http://localhost:8008/api/v1";

req.open("GET", `${apiv1}/images`, true);
req.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  // Checking Respon Data
  console.log(data);

  if (req.status >= 200 && req.status < 400) {
    // Checking Respon Data
    console.log(`file image url: ${data[34].imageUrl}`);
    console.log(`file image url: ${data[35].imageUrl}`);

    contactPageBgBottom.style.backgroundImage = `url(${data[34].imageUrl})`;

    contFeatImg.src = data[35].imageUrl;
  } else {
    console.log("nothing respond");
  }
};

req.send(); // ini buat apa ya?? :P
