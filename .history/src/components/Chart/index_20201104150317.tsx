// @flow
import { createChart } from "lightweight-charts";
import * as React from "react";
import "./index.css";

interface ChartProps {}
export const Chart: React.FC<ChartProps> = (props) => {
  const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      layout: {
        backgroundColor: "#253248",
        textColor: "rgba(255,255,255,0.9)"
      },
      grid: {
        vertLines: {
          color: "#334158"
        },
        horzLines: {
          color: "#334158"
        }
      }
    })
  }, [])

  return <div className="Chart" ref={containerRef}></div>;
};
