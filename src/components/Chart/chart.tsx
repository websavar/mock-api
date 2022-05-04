import { PieChart, Pie, Cell } from "recharts";
import { ChartDataInterface } from 'interfaces';

const COLORS: string[] = ["#6497B1", "#FFC107", "#F24E1E", "#A259FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart: React.FC<{ data: ChartDataInterface[] }> = ({ data }) => {

  return (
    <>
      <div className="info-container chart-header">
        {data.map((item, index) =>
          <div className="chart-info" key={item.name}>
            <div style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span>{item.name}</span>
          </div>
        )}
      </div>

      <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx={250}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>

  );
}
export default Chart;