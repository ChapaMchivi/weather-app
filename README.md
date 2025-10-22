## 🌦️ Weather App

A responsive web application that fetches live weather data from the [WeatherAPI](https://www.weatherapi.com/) and displays a **14‑day forecast** with dynamic visuals.  
Built as part of the **Coursera Project Network: Build a Website using an API with HTML, JavaScript, and JSON** course.

---

### 📖 Project Overview

The **Weather App** allows users to:
- Search for any city worldwide
- View a **14‑day forecast** with temperature, humidity, wind, and conditions
- Experience a **dynamic background** that adapts to weather conditions (sunny, rainy, cloudy, snowy)
- Enjoy a **responsive, animated UI** with fade‑in transitions and hover effects

This project demonstrates how to consume a REST API, parse JSON, and update the DOM dynamically with JavaScript.

---

### 🧑‍💻 Skills Demonstrated

- **API Integration**: `fetch()` with async/await and secure proxy routing
- **JavaScript (ES6)**: DOM manipulation, error handling, modular functions
- **Frontend Development**: HTML5, CSS3, responsive design
- **UI/UX Enhancements**: Animations, hover effects, dynamic theming
- **Version Control**: Git & GitHub for project management
- **Security Practices**: Backend proxy architecture with environment variable protection

---

### 🛠️ Tools Used

- **Languages**: HTML, CSS, JavaScript  
- **API**: [WeatherAPI](https://www.weatherapi.com/)  
- **Editor**: VS Code with Live Server  
- **Version Control**: Git & GitHub  
- **Icons**: [Font Awesome](https://fontawesome.com/)  
- **Backend Hosting**: [Render](https://render.com/)  

---

## 🔐 Security & Architecture

This project uses a secure backend proxy hosted on Render to protect sensitive credentials and manage API requests.

- **Frontend**: Deployed via GitHub Pages  
- **Backend**: Node.js proxy hosted on Render  
- **API Key Protection**: WeatherAPI key stored in Render’s environment settings  
- **CORS Enabled**: Allows secure communication between frontend and backend  
- **Environment Variables**: Defined in `.env` (ignored by Git), with `.env.example` provided for reference

Legacy files like `config.js` and `config.example.js` have been removed to eliminate hardcoded secrets and streamline deployment.

---

### 📜 Summary

This project showcases a **real‑world workflow**: integrating a third‑party API, handling JSON data, and presenting it in a polished, user‑friendly interface — while following best practices for security and architecture.

---

### 💡 Solution

- **Problem**: Display live weather data in a clean, interactive way  
- **Solution**: Build a web app that fetches data from WeatherAPI via a secure backend proxy, processes JSON, and renders it dynamically with styled forecast cards and responsive design

---

### 🧭 Approach

1. **Setup**: Created project structure (`index.html`, `style.css`, `script.js`)  
2. **API Integration**: Used `fetch()` with async/await to call a backend proxy  
3. **Data Handling**: Parsed JSON and extracted relevant fields  
4. **UI Design**: Built forecast cards with CSS grid/flexbox, added animations and hover effects  
5. **Dynamic Background**: Changed gradient colors based on weather conditions  
6. **Security**: Deployed a backend proxy on Render to securely store and use the API key

---

## 📂 Project Structure

```
WEATHER-APP/
├── index.html          # Main entry point
├── style.css           # Styling and animations
├── script.js           # App logic and API calls
├── .gitignore          # Ensures secrets stay private
├── .env.example        # Reference for expected environment variables
└── backend/            # Proxy server (optional separate repo)
    ├── server.js       # Express server with proxy endpoint
    ├── package.json    # Dependencies and start script
    └── .env            # WeatherAPI key (not committed)
```

---

## 🔗 Project Links

👉 [Live Demo](https://chapamchivi.github.io/weather-app/)  
👉 [GitHub Repository](https://github.com/ChapaMchivi/weather-app)  
👉 [Backend Proxy (Render)](https://weather-app-backend-w78l.onrender.com/weather?city=London)

---

### 📜 License

This project is for educational and portfolio purposes. Feel free to fork and adapt.




























