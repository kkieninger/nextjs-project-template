import { portfolioProducts } from '@app/data';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { PortfolioProduct } from '@app/types';

/**
 * In an ideal world, this data is fetched from an API, but for the sake of
 * example / demonstration we're just returning a hardcoded array of objects
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioProduct[]>
) {
  res.status(200).json(portfolioProducts)
}
