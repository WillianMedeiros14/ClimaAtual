import { TypeCondition } from 'features/components/ItemsNextForecast';

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
