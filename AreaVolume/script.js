function areaVolume(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  var result = [area, volume];
  return result;
}

document.write(
  "the area of the box is " + areaVolume(4, 5, 9)[0] + "m<sup>2</sup>"
);

document.write("</br>");

document.write(
  "the volume of the box is " + areaVolume(4, 5, 9)[1] + "m<sup>3</sup>"
);
