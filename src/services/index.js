import axios from 'axios';

export const getOnCall = async (lat, long) => {
    try {
        const response = await axios.get(`/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getForecast = async (lat, long) => {
    try {
        const response = await axios.get(`/forecast?lat=${lat}&lon=${long}&units=metric&lang=id&appid=${process.env.REACT_APP_API_KEY}`);
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export const getWeatherCity = async (city) => {
    try {
        const response = await axios.get(`/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
}
