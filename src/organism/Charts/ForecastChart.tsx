import type { FunctionComponent } from "react";
import {
  ComposedChart as ComposedChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

type ForecastChartProps = {
  data: { name: string; Actual?: number; Plan?: number; Forecast?: number }[];
  bars: {
    name?: string;
    dataKey: string;
    stackId?: string;
    barSize?: number;
    fill: string;
    dashed?: boolean;
  }[];
  lines?: {
    type: CurveType;
    dataKey: string;
    stroke: string;
  }[];
  yAxisUnit?: string;
  yTickFormatter?: (value: any, index: number) => string;
};

const ForecastChart = ({ data, bars, lines, ...props }: ForecastChartProps) => {
  return (
    <ComposedChartComponent
      width={600}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={-80}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={props.yTickFormatter} unit={props.yAxisUnit} />
      <Tooltip />
      <Legend wrapperStyle={{ height: 0 }} />
      {bars.map(({ dashed, ...bar }) => (
        <Bar
          key={bar.dataKey}
          {...bar}
          {...(!!dashed && {
            shape: <BarWithBorder />,
          })}
        />
      ))}
      {lines?.map((line) => <Line key={line.dataKey} {...line} />)}
    </ComposedChartComponent>
  );
};

export default ForecastChart;

const BarWithBorder: FunctionComponent<any> = ({
  fill,
  strokeDasharray,
  x,
  y,
  width,
  height,
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="none"
        fill={`${fill}44`}
      />
      <DashedLine
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        strokeDasharray={strokeDasharray}
        stroke={fill}
      />
      <DashedLine
        x1={x}
        y1={y}
        x2={x}
        y2={y + height}
        strokeDasharray={strokeDasharray}
        stroke={fill}
      />
      <DashedLine
        x1={x + width}
        y1={y}
        x2={x + width}
        y2={y + height}
        strokeDasharray={strokeDasharray}
        stroke={fill}
      />
    </g>
  );
};

const DashedLine = ({
  x1,
  y1,
  x2,
  y2,
  strokeDasharray = "3 2 3",
  stroke = "#fff",
}: any) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={stroke}
    strokeDasharray={strokeDasharray}
    strokeLinecap="round"
  />
);
