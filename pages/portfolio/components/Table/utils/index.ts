export const calculateGainLoss = (marketValue: number, purchasePrice: number) => {
  const percentageDifference = (marketValue - purchasePrice) / purchasePrice * 100;
  
  return percentageDifference.toPrecision(4);
};
