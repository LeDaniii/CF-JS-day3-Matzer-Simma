function cristalGazer() {
  let job_title = prompt("What do you wanna be?");
  let location = prompt("Where do you want do live?");
  let partners_name = prompt("What's your favorite name?");
  let number_childrens = prompt("How many children do you want?");
  document.write(
    "U'll be a " +
      job_title +
      " in " +
      location +
      " and married to " +
      partners_name +
      " and have " +
      number_childrens +
      " children!"
  );
}

cristalGazer(job_title, location, partners_name, number_childrens);
