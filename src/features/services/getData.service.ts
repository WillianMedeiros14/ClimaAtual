import { TypeCondition } from 'features/components/ItemsNextForecast';
import { TypeMode } from 'features/hooks/useColorsGradient';
import { api } from 'global/services/api';

export interface IWeather {
  temp: number;
  date: string;
  time: string;
  condition_code: string;
  description: string;
  currently: string;
  cid: string;
  city: string;
  img_id: string;
  humidity: number;
  cloudiness: number;
  rain: number;
  wind_speedy: string;
  wind_direction: number;
  sunrise: string;
  sunset: string;
  condition_slug: string;
  city_name: string;
  forecast: IForecast[];
  cref: string;
}

export interface IForecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  cloudiness: number;
  rain: number;
  rain_probability: number;
  wind_speedy: string;
  description: string;
  condition: TypeCondition;
}
export interface IResultWeather {
  results: IWeather;
}

export const getData = async () => {
  try {
    const response = await api.get<IResultWeather>('/');

    return response.data.results;
  } catch (error) {
    console.log('Error');
    console.log(error);
  }
};
