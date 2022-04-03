import { useQuery } from 'react-query';
import axios from 'axios';
import type { ChartData } from '@app/types';

const getChartData = async () => {
  const { data } = await axios.get<ChartData[]>('/api/chart');
  
  return data;
};

export default function useChartData() {
  return useQuery('chartData', getChartData);
}
