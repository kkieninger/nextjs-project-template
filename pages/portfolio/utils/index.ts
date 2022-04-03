import type { ChartData } from '@app/types';
import type { ProductData } from '../components/Charts/types';

const colorRange = [
  '#0BC5EA',
  '#ECC94B',
  '#48BB78',
  '#ED8936',
  '#ED64A6',
  '#38B2AC',
  '#F56565',
  '#A0AEC0',
  '#4299E1',
  '#9F7AEA',
];

// Normalize data and map chart colors to portfolio items
export const normalizeChartData = (
  data: ChartData[] = [],
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
