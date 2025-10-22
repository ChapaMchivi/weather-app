## 🌦️ Weather App

A responsive web application that fetches live weather data from the [WeatherAPI](https://www.weatherapi.com/) and displays a **14‑day forecast** with dynamic visuals.  
Built as part of the **Coursera Project Network: Build a Website using an API with HTML, JavaScript, and JSON** course.


---

### 📖 Project Overview
The **Weather App** allows users to:
- Search for any city worldwide.
- View a **14‑day forecast** with daily cards showing temperature, humidity, wind, and conditions.
- Experience a **dynamic background** that changes based on weather conditions (sunny, rainy, cloudy, snowy).
- Enjoy a **responsive, animated UI** with fade‑in transitions and hover effects.

This project demonstrates how to consume a REST API, parse JSON, and update the DOM dynamically with JavaScript.

---

### 🧑‍💻 Skills Demonstrated
- **API Integration**: Consuming REST APIs with `fetch()` and proxy routing.
- **JavaScript (ES6)**: DOM manipulation, async/await, error handling.
- **Frontend Development**: HTML5, CSS3, responsive design.
- **UI/UX Enhancements**: Animations, hover effects, dynamic theming.
- **Version Control**: Git & GitHub for project management.
- **Security Practices**: Using a backend proxy to protect API keys.

---

### 🛠️ Tools Used
- **Languages**: HTML, CSS, JavaScript  
- **API**: [WeatherAPI](https://www.weatherapi.com/)  
- **Editor**: VS Code with Live Server  
- **Version Control**: Git & GitHub  
- **Icons**: [Font Awesome](https://fontawesome.com/)  
- **Backend Hosting**: [Render](https://render.com/)  

---

## 🔐 Backend Proxy (Security Upgrade)

To protect the WeatherAPI key, this project includes a secure backend proxy hosted on Render:

```
https://weather-app-backend-w78l.onrender.com/weather?city=London
```

The frontend sends requests to this proxy, which securely forwards them to WeatherAPI and returns the forecast data. This ensures the API key is never exposed in the browser or GitHub Pages.

---

## 📜 Summary
This project showcases a **real‑world workflow**: integrating a third‑party API, handling JSON data, and presenting it in a polished, user‑friendly interface — while following best practices for security and architecture.

---

### 💡 Solution
- **Problem**: Display live weather data in a clean, interactive way.  
- **Solution**: Build a web app that fetches data from WeatherAPI via a secure backend proxy, processes JSON, and renders it dynamically with styled forecast cards and responsive design.

---

### 🧭 Approach
1. **Setup**: Created project structure (`index.html`, `style.css`, `script.js`).  
2. **API Integration**: Used `fetch()` with async/await to call a backend proxy.  
3. **Data Handling**: Parsed JSON and extracted relevant fields (temperature, humidity, wind, condition).  
4. **UI Design**: Built forecast cards with CSS grid/flexbox, added animations and hover effects.  
5. **Dynamic Background**: Changed gradient colors based on weather conditions.  
6. **Security**: Deployed a backend proxy on Render to securely store and use the API key.

---

## 📂 Project Structure

```
WEATHER-APP/
├── index.html          # Main entry point
├── style.css           # Styling and animations
├── script.js           # App logic and API calls
├── .gitignore          # Ensures secrets stay private
└── backend/            # Proxy server (optional separate repo)
    ├── server.js       # Express server with proxy endpoint
    ├── package.json    # Dependencies and start script
    └── .env            # WeatherAPI key (not committed)
```

---

## 🔗 Project Link
👉 [Live Demo](https://chapamchivi.github.io/weather-app/)  
👉 [GitHub Repository](https://github.com/ChapaMchivi/weather-app)  
👉 [Backend Proxy (Render)](https://weather-app-backend-w78l.onrender.com/weather?city=London)

---

### 📜 License
This project is for educational and portfolio purposes. Feel free to fork and adapt.

---




























