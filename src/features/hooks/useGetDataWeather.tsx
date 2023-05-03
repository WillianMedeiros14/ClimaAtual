import { useState } from 'react';

import { IResultWeather, IWeather } from 'features/services/getData.service';
import { api } from 'global/services/api';

export default function useGetDataWeather() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  async function getWeather() {
    try {
      setLoading(true);
      const response = await api.get<IResultWeather>('/');

      setWeather(response.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Error');
      console.log(error);
    }
  }

  return {
    loading,
    getWeather,
    weather,
  };
}
