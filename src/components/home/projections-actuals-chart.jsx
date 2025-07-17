import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const chartData = [
  { month: "Jan", actuals: 16000000, projections: 4000000 },
  { month: "Feb", actuals: 20000000, projections: 5000000 },
  { month: "Mar", actuals: 18000000, projections: 4000000 },
  { month: "Apr", actuals: 24000000, projections: 6000000 },
  { month: "May", actuals: 14000000, projections: 4000000 },
  { month: "Jun", actuals: 20000000, projections: 5000000 },
];

const chartConfig = {
  actuals: {
    label: "Actuals",
    color: "var(--bar-chart-1)",
  },
  projections: {
    label: "Projections",
    color: "var(--bar-chart-2)",
  },
};

export function ProjectionsActualsChart() {
  return (
    <div className="col-span-full flex flex-col gap-4 rounded-2xl bg-primary-light p-6 lg:col-span-2">
      <p className="font-semibold text-sm">Projections vs Actuals</p>

      <ChartContainer config={chartConfig} className="h-[168px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          barSize={20}
          margin={{ top: 5, right: 0, left: -15, bottom: -5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={4}
            tickFormatter={(value) => {
              if (value === 0) return "0";
              return `${value / 1000000}M`;
            }}
          />
          <Bar dataKey="actuals" fill="var(--color-actuals)" stackId="a" />
          <Bar
            dataKey="projections"
            fill="var(--color-projections)"
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
