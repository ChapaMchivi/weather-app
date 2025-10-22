// script.js

async function getWeather() {
  const city = document.getElementById("cityInput").value || "London";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=14&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Weather data:", data);

    const forecastDiv = document.getElementById("forecast");

    // Clear previous results
    forecastDiv.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Local Time:</strong> ${data.location.localtime}</p>
      <div class="forecast-cards"></div>
    `;

    const cardsContainer = forecastDiv.querySelector(".forecast-cards");

    // Loop through 14 days of forecast
    data.forecast.forecastday.forEach((day, index) => {
      const card = document.createElement("div");
      card.classList.add("forecast-card", "fade-in");
      card.style.animationDelay = `${index * 0.1}s`; // staggered fade-in

      card.innerHTML = `
        <h3>${day.date}</h3>
        <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
        <p><i class="fa-solid fa-cloud"></i> ${day.day.condition.text}</p>
        <p>🌡️ High: ${day.day.maxtemp_c} °C</p>
        <p>🌡️ Low: ${day.day.mintemp_c} °C</p>
        <p>💧 Humidity: ${day.day.avghumidity}%</p>
        <p>💨 Max Wind: ${day.day.maxwind_kph} kph</p>
      `;

      cardsContainer.appendChild(card);
    });

    // 🌈 Dynamic background based on current condition
    setDynamicBackground(data.current.condition.text.toLowerCase());

  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("forecast").innerHTML =
      `<p style="color:red;">Failed to load weather data. Please check the city name.</p>`;
  }
}

// Function to change background gradient dynamically
function setDynamicBackground(condition) {
  const body = document.body;

  if (condition.includes("sunny") || condition.includes("clear")) {
    body.style.background = "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"; // warm tones
  } else if (condition.includes("rain") || condition.includes("drizzle")) {
    body.style.background = "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"; // cool blue
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)"; // gray tones
  } else if (condition.includes("snow")) {
    body.style.background = "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)"; // icy
  } else {
    body.style.background = "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)"; // default sky
  }
}