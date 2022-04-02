import type { ChartData } from '@app/types';
import type { ProductData } from '../types';

// @TODO - fix the colors
const colorRange = [
  '#00aeef',
  '#f26c4f',
  '#605ca8',
  '#00a99d',
  '#1b1464',
  '#0072bc',
  '#f7c000',
  '#f7941d',
  '#f0505f',
  '#39b54a',
];

// Normalize data and map chart colors to portfolio items
export const normalizeChartData = (
  data: ChartData[],
  chartValue: keyof ChartData,
): ProductData[] =>
  data.map((datum, index) => ({
    label: datum.name,
    value:
      chartValue === 'pricePremium' ? Number(datum[chartValue]) * 100 : Number(datum[chartValue]),
    labelColor:
      index >= colorRange.length ? colorRange[index - colorRange.length] : colorRange[index],
  }));

export const formatDollars = (number = 0) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(number);
}
