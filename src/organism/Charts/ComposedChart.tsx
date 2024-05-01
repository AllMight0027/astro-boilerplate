import type { FunctionComponent } from "react";
import {
  ComposedChart as ComposedChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Line,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

type ComposedChartProps = {
  data: (object & { name: string })[];
  bars: {
    name?: string;
    dataKey: string;
    stackId?: string;
    barSize?: number;
    fill: string;
  }[];
  lines?: {
    type: CurveType;
    dataKey: string;
    stroke: string;
  }[];
  areas?: {
    type: CurveType;
    dataKey: string;
    stroke: string;
    fill: string;
  }[];
  yAxisUnit?: string;
  yTickFormatter?: (value: any, index: number) => string;
};

const ComposedChart = ({
  data,
  bars,
  lines,
  areas,
  ...props
}: ComposedChartProps) => {
  return (
    <ComposedChartComponent
      width={600}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={props.yTickFormatter} unit={props.yAxisUnit} />
      <Tooltip />
      <Legend wrapperStyle={{ height: 0 }} />
      {bars.map((bar) => (
        <Bar key={bar.dataKey} {...bar} />
      ))}
      {lines?.map((line) => <Line key={line.dataKey} {...line} />)}
      {areas?.map((area) => <Area key={area.dataKey} {...area} />)}
    </ComposedChartComponent>
  );
};

export default ComposedChart;
