import { useState } from 'react';

import { IResultWeather, IWeather } from 'features/services/getData.service';
import { api } from 'global/services/api';

export default function useGetDataWeather() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  async function getWeather() {
    try {
      setLoading(true);
      const response = await api.get<IResultWeather>('/');
      console.log(response.data);
      setWeather(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log('Error');
      console.log(error);
      return [];
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    getWeather,
    weather,
  };
}
