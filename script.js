// Fetch weather data from secure backend proxy
async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const forecastDiv = document.getElementById("forecast");
  const loadingSpinner = document.getElementById("loading");

  const city = cityInput.value.trim() || "London";
  const url = `https://weather-app-backend-w78l.onrender.com/weather?city=${encodeURIComponent(city)}`;

  try {
    loadingSpinner.style.display = "block"; // Show loading spinner

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather data:", data);

    renderForecast(data);
    setDynamicBackground(data.current?.condition?.text?.toLowerCase() || "");
  } catch (error) {
    console.error("Error fetching weather data:", error);
    forecastDiv.innerHTML = `
      <p style="color:red;" role="alert">
        Failed to load weather data. Please check the city name or try again later.
      </p>
    `;
  } finally {
    loadingSpinner.style.display = "none"; // Hide loading spinner
  }
}

// Render forecast cards dynamically
function renderForecast(data) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p><strong>Local Time:</strong> ${data.location.localtime}</p>
    <div class="forecast-cards"></div>
  `;

  const cardsContainer = forecastDiv.querySelector(".forecast-cards");

  data.forecast.forecastday.forEach((day, index) => {
    const icon = day.day.condition.icon ? `https:${day.day.condition.icon}` : "default-icon.png";
    const conditionText = day.day.condition.text || "Unknown";

    const card = document.createElement("div");
    card.classList.add("forecast-card", "fade-in");
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <h3>${day.date}</h3>
      <img src="${icon}" alt="${conditionText}" aria-label="Weather icon for ${conditionText}" />
      <p><i class="fa-solid fa-cloud"></i> ${conditionText}</p>
      <p>🌡️ High: ${day.day.maxtemp_c} °C</p>
      <p>🌡️ Low: ${day.day.mintemp_c} °C</p>
      <p>💧 Humidity: ${day.day.avghumidity}%</p>
      <p>💨 Max Wind: ${day.day.maxwind_kph} kph</p>
    `;

    cardsContainer.appendChild(card);
  });
}

// Set dynamic background based on weather condition
function setDynamicBackground(condition) {
  const body = document.body;

  if (condition.includes("sunny") || condition.includes("clear")) {
    body.style.background = "linear-gradient(135deg, #f6d365 0%, #fda085 100%)";
  } else if (condition.includes("rain") || condition.includes("drizzle")) {
    body.style.background = "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)";
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)";
  } else if (condition.includes("snow")) {
    body.style.background = "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)";
  } else {
    body.style.background = "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)";
  }
}

