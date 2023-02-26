import React from "react";

interface Props {
  d: string;
  d1?: string;
  fill: string
}

const IconComponent = ({ d, d1, fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill={fill} d={d} />
      { d1 ? <path fill={fill} d={d1} /> : '' }
    </svg>
  );
};

export default IconComponent;
