import { useQuery } from 'react-query';
import axios from 'axios';
import type { PortfolioProduct } from '@app/types';

const getPortfolioData = async () => {
  const { data } = await axios.get<PortfolioProduct[]>('/api/table');
  
  return data;
};

export default function usePortfolioData() {
  return useQuery('portfolioData', getPortfolioData);
}
