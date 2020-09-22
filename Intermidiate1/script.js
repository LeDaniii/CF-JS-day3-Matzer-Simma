function capit(string) {
  letter = string.charAt(0);
  letter2 = letter.toUpperCase();
  return letter2 + string.substring(1);
}

text1 = "whats uuuuup";
text4 = "hallo was geht";
text3 = "es war einmal ein kleiner programmierer";
text2 = "der hatte es nicht lich";
text5 = "i am a webdeveloper";

document.write(capit(text1));
document.write("</br>");
document.write(capit(text2));
document.write("</br>");
document.write(capit(text3));
document.write("</br>");
document.write(capit(text4));
document.write("</br>");
document.write(capit(text5));

// document.write(capit("hallo i bims"));
