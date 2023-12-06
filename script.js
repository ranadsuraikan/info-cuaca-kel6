const apikey = "e14bdd1c63605cdac5036ea8dcd89d4a";

const weatherDataEl = document.querySelector(".info");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
  cityInputEl.value = "";
  getWeatherData("Jakarta");
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;

    weatherDataEl.style.display = "block";
    weatherDataEl.innerHTML = `
      <p>City: <span class="kota">${cityValue}</span></p>
      <p>Condition: <span class="kondisi">${description}</span></p>
      <p>Temperature: <span class="temperatur">${temperature}°C</span></p>
      <p>Wind Speed: <span class="kecepatan-angin">${windSpeed} m/s</span></p>
    `;
  } catch (error) {
    console.error(error);
    weatherDataEl.style.display = "block"; 
    weatherDataEl.innerHTML = "<p>Lokasi tidak ditemukan</p>";
  }
}


// const apikey = "e14bdd1c63605cdac5036ea8dcd89d4a";

// const weatherDataEl = document.querySelector(".info");
// const cityInputEl = document.getElementById("city-input");

// const formEl = document.querySelector("form");

// document.addEventListener("DOMContentLoaded", () => {
//   cityInputEl.value = "";
//   getWeatherData("Jakarta");
// });

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cityValue = cityInputEl.value;
//   getWeatherData(cityValue);
// });

// async function getWeatherData(cityValue) {
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();

//     const temperature = Math.round(data.main.temp);
//     const description = data.weather[0].description;
//     const windSpeed = data.wind.speed;

//     // Menampilkan data cuaca jika berhasil ditemukan
//     weatherDataEl.style.display = "block"; // Menampilkan elemen .info
//     weatherDataEl.innerHTML = `
//       <p class="kota">${cityValue}</p>
//       <p class="kondisi">${description}</p>
//       <p class="temperatur">${temperature}°C</p>
//       <p class="kecepatan-angin">${windSpeed} m/s</p>
//     `;
//   } catch (error) {
//     console.error(error);
//     // Menampilkan pesan "Lokasi tidak ditemukan" dan menyembunyikan elemen-elemen cuaca lainnya
//     weatherDataEl.style.display = "block"; // Menampilkan elemen .info
//     // Menampilkan pesan "Lokasi tidak ditemukan" di dalam elemen .info
//     weatherDataEl.innerHTML = "<p>Lokasi tidak ditemukan</p>";
//   }
// }
