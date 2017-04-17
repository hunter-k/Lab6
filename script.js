
function convertTemp (temp, unit) {
  if (unit === "C") {
    var tempinc = Math.round((temp - 32) * (5/9));
    console.log(temp + "°F is equivalent to " + tempinc + "°C");
  } else {
    var tempinF = Math.round(temp * 9 / 5 + 32);
    console.log(temp + "°C is equivalent to " + tempinF + "°F");
  }
}
