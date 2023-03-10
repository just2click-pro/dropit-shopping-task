import React, { FC } from "react";

import IconComponent from "./components/IconComponent";

const BackIcon: FC = () => {
  return (
    <IconComponent
      d={"M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"}
      fill="#909090"
    />
  );
};

export { BackIcon };
