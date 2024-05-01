import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type StackedBarProps = {
  data: {
    name: string;
    amt: number;
    [x: string]: number | string;
  }[];
  bars: {
    name?: string;
    dataKey: string;
    stackId: string;
    fill: string;
  }[];
};

const StackedBarChart = ({ data, bars }: StackedBarProps) => {
  return (
    <BarChart
      width={600}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend wrapperStyle={{ height: 0 }} />
      {bars.map((bar) => (
        <Bar key={bar.dataKey} {...bar} />
      ))}
    </BarChart>
  );
};

export default StackedBarChart;
