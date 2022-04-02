import { chartData } from '@app/data';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ChartData } from '../../../types/charts';

/**
 * In an ideal world, this data is fetched from an API, but for the sake of
 * example / demonstration we're just returning a hardcoded array of objects
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChartData[]>
) {
  res.status(200).json(chartData)
}
