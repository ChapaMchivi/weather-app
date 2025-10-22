async function getWeather() {
  const city = document.getElementById("cityInput").value.trim() || "London";

  // Secure proxy call to Render backend
  const url = `https://weather-app-backend-w78l.onrender.com/weather?city=${encodeURIComponent(city)}`;

  try {
    // Show loading spinner
    document.getElementById("loading").style.display = "block";

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Weather data:", data);

    renderForecast(data);
    setDynamicBackground(data.current.condition.text.toLowerCase());
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("forecast").innerHTML =
      `<p style="color:red;">Failed to load weather data. Please check the city name.</p>`;
  } finally {
    // Hide loading spinner
    document.getElementById("loading").style.display = "none";
  }
}

function renderForecast(data) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p><strong>Local Time:</strong> ${data.location.localtime}</p>
    <div class="forecast-cards"></div>
  `;

  const cardsContainer = forecastDiv.querySelector(".forecast-cards");

  data.forecast.forecastday.forEach((day, index) => {
    const card = document.createElement("div");
    card.classList.add("forecast-card", "fade-in");
    card.style.animationDelay = `${index * 0.1}s`;

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
}

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
