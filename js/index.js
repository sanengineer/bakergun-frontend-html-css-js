const req1 = new XMLHttpRequest();
const req2 = new XMLHttpRequest();

// Endpoint Backend RestAPI Local
// const apiv1 = "http://localhost:8008/api/v1";

// Endpoint Backend RestAPI Cloud
const apiv1 = "https://bakergun-backend.herokuapp.com/api/v1";

req1.open("GET", `${apiv1}/players`, true);
req1.onload = function () {
  // Begin accessing JSON data here
  var rd2 = JSON.parse(this.response);

  // Checking Respon Data
  console.log(rd2);

  quotes1 = rd2[0].avatar;
  quotes2 = rd2[1].avatar;
  quotes3 = rd2[2].avatar;

  if (req1.status >= 200 && req1.status < 400) {
    var elemid = function (id) {
      return document.getElementById(id);
    };

    elemid("avatarManAstronoutLightSkin").src = quotes1;
    elemid("avatarWomanShortHairLightSkin").src = quotes2;
    elemid("avatarMonyet").src = quotes3;
  } else {
    console.log("nothing respond");
  }
};

req1.send();

req2.open("GET", `${apiv1}/images`, true);
req2.onload = function () {
  // Begin accessing JSON data here
  var rd = JSON.parse(this.response);

  // Checking Respon Data
  console.log(rd);

  if (req2.status >= 200 && req2.status < 400) {
    bgpage = rd[0].imageUrl;
    herobg = rd[26].imageUrl;
    homecarrou1 = rd[27].imageUrl;
    homecarrou2 = rd[28].imageUrl;
    homecarrou3 = rd[29].imageUrl;
    reqbg = rd[32].imageUrl;
    secfeatimg = rd[30].imageUrl;
    secnewsfeatimg = rd[31].imageUrl;

    var elemid = function (id) {
      return document.getElementById(id);
    };

    elemid("bodyId").style.backgroundImage = `url(${herobg})`;
    elemid("imageCarrouselOne").src = homecarrou1;
    elemid("imageCarrouselTwo").src = homecarrou2;
    elemid("imageCarrouselThree").src = homecarrou3;
    elemid("requireBg").style.backgroundImage = `url(${reqbg})`;
    elemid("sectionFeaturesImageFeature").src = secfeatimg;
    elemid("sectionNewLettFeatureImage").src = secnewsfeatimg;
  } else {
    console.log("nothing respond");
  }
};

req2.send();

//
//
// Noted:
// Aku masih belum bisa memakai fungsi dibawah ini kak, hehe
//
// Meskipun kalo di console log udah dapet 2 endpoint,
// tapi aku masih belum caranya narik ke data data yang ada ke dom htmlnya
//
// Jadi aku memakai cara di atas, meskipun kurang pratikebel.

var endpoint = ["images", "players"];

for (var i = 0; i < endpoint.length; i++) {
  var request = new XMLHttpRequest();
  var url = "http://localhost:8008/api/v1/" + endpoint[i];
  request.open("GET", url);

  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
  };

  request.send();
}
