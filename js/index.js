// Tu codigo JS va acá



const peticionClima = async() => {
    try {
    let input = document.querySelector("#ciudad").value
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7bcc422075a105001363aa3ad60f2025&units=metric&lang=es`)
    const arrCiudades = await response.json()
    console.log(arrCiudades)

    let ciudad = document.querySelector("#texto-ciudad")
    ciudad.innerText = arrCiudades.name

    let temperatura = document.querySelector("#temperatura")
    temperatura.textContent = `${Math.round(arrCiudades.main.temp)}°C`

    let pronostico = document.querySelector("#pronostico")
    pronostico.textContent = arrCiudades.weather[0].description

    let iconImg = document.querySelector("#icono")
    iconImg.setAttribute('src',`http://openweathermap.org/img/w/${arrCiudades.weather[0].icon}.png`)

    let humedad = document.querySelector("#humedad")
    humedad.textContent = (`${arrCiudades.main.humidity}%`)

    let viento = document.querySelector("#viento")
    viento.textContent = (`${arrCiudades.wind.speed}m/s`)

    } catch (error) {
        console.log(error)
    } 
    ciudad.value = '' 
}
