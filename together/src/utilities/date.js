export function date() {
  let date = new Date();
  let fix = "";
  let fix2 = "";
  let minutes = date.getMinutes();
  if (minutes === 0) {
    fix = "0";
  } else {
    if (minutes < 10) {
      fix2 = "0";
    }
  }
  date =
    String(date.getDate()) +
    "/" +
    String(date.getMonth() + 1) +
    "/" +
    String(date.getFullYear()) +
    "\n" +
    String(date.getHours()) +
    ":" +
    fix2 +
    String(date.getMinutes()) +
    fix;
  return date.toString();
}
