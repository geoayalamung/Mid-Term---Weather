
function searchCity() {
    const cityInput = document.getElementById("city-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`)
      .then(response => response.json())
      .then(data => {
        const cityName = data.name;
        const cityTemp = data.main.temp;
        const cityInfo = `City: ${cityName}<br>Temperature: ${cityTemp}°F`;
        document.getElementById("city-info").innerHTML = cityInfo;
      })
      .catch(error => {
        console.error("Error fetching city information:", error);
      });
  }
  