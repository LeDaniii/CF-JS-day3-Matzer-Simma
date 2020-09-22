let minute = prompt("How many minutes?");

function timeCon(minute) {
  let hour = Math.floor(parseInt(minute) / 60);
  let rest = minute % 60;
  return alert(
    minute + "minutes = " + hour + " hour(s) and " + rest + " minute(s)"
  );
}

timeCon(minute);
