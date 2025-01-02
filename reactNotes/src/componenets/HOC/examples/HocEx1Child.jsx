import React from "react";
import { memo } from "react";

const HocEx1Child = (props) => {
  console.log("child", props);

  return (
    <div>
      <p>Child</p>
    </div>
  );
};

export default memo(HocEx1Child);
