const req = new XMLHttpRequest();
const bodId = document.getElementById("bodyId");
// Endpoint Backend RestAPI Local
// const apiv1 = "http://localhost:8008/api/v1";

// Endpoint Backend RestAPI Cloud
const apiv1 = "https://bakergun-backend.vercel.app/api/v1";

req.open("GET", `${apiv1}/images`, true);
req.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  // Checking Respon Data
  console.log(data);

  if (req.status >= 200 && req.status < 400) {
    // Checking Respon Data
    console.log(`file image url: ${data[26].imageUrl}`);

    bodId.style.backgroundImage = `url(${data[26].imageUrl})`;
  } else {
    console.log("nothing respond");
  }
};

req.send(); // ini buat apa ya?? :P
