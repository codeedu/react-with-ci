// @flow
import * as React from "react";
import "./index.css";

interface ChartProps {}
export const Chart: React.FC<ChartProps> = (props) => {
  const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;  
  return <div className="Chart" ref={containerRef}></div>;
};
