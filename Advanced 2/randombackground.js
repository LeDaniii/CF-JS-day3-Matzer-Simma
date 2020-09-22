//let body = document.getElementsByTagName(body);

function randomBackground() {
  var RGB1 = Math.floor(Math.random() * 255);
  var RGB2 = Math.floor(Math.random() * 255);
  var RGB3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb(" + RGB1 + ", " + RGB2 + ", " + RGB3 + ")";
}

randomBackground();

document.write(RGB1 + "<br>");
document.write(RGB2 + "<br>");
document.write(RGB3 + "<br>");

//rgb(255, 0, 0)
