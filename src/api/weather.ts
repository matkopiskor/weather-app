import axios, { AxiosRequestConfig } from 'axios';

const createOptions = (coords: [number, number]): AxiosRequestConfig => {
    return {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: { lat: coords[0].toString(), lon: coords[1].toString() },
        headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': 'b8d8d5bc05msh726f4edac96905dp149816jsne1eba348d64c',
        },
    };
};

export const fetchWeather = async (coords: [number, number]) => {
    const savedDataStr = localStorage.getItem('weather');
    const savedData = JSON.parse(savedDataStr ?? '{}') ?? {};
    if (Object.keys(savedData).length !== 0) {
        return savedData;
    }
    try {
        const response = await axios.request(createOptions(coords));
        const data = response.data.data[0];
        localStorage.setItem('weather', JSON.stringify(data));
        return response.data.data[0];
    } catch (error) {
        console.error(error);
    }
};
