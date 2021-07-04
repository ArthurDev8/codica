import axios from "axios";

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})
//https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=aa623e964588ac92c61b0209e6486f3f

//https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=aa623e964588ac92c61b0209e6486f3f

//https://api.openweathermap.org/data/2.5weather?q=London&units=metric&appid=aa623e964588ac92c61b0209e6486f3f