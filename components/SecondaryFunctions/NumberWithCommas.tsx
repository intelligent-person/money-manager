import React from "react";

type Props = {
  sum: string;
};

const NumberWithCommas: React.FC<Props> = ({ sum }) => {
  return sum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default NumberWithCommas;
