function updateTime() {
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "HH:mm:ss [<small>]A[<small>]"
  );

  let baliElement = document.querySelector("#bali");
  let baliDateElement = baliElement.querySelector(".date");
  let baliTimeElement = baliElement.querySelector(".time");
  let baliTime = moment().tz("Asia/Jakarta");

  baliDateElement.innerHTML = baliTime.format("MMMM Do YYYY");
  baliTimeElement.innerHTML = baliTime.format("HH:mm:ss [<small>]A[<small>]");

  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("HH:mm:ss [<small>]A[<small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All Cities</a>
  `;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
