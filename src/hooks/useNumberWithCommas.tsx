export const useNumberWithCommas = (amount: string) => {
  return {amountWithCommas: amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")};
};
