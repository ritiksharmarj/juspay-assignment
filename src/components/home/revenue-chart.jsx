import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const chartData = [
  { month: "Jan", currentWeek: 12000000, previousWeek: 8000000 },
  { month: "Feb", currentWeek: 10000000, previousWeek: 17000000 },
  { month: "Mar", currentWeek: 8000000, previousWeek: 15000000 },
  { month: "Apr", currentWeek: 14000000, previousWeek: 10000000 },
  { month: "May", currentWeek: 19000000, previousWeek: 12000000 },
  { month: "Jun", currentWeek: 20000000, previousWeek: 23000000 },
];

const chartConfig = {
  currentWeek: {
    label: "Current Week",
    color: "var(--area-chart-1)",
  },
  previousWeek: {
    label: "Previous Week",
    color: "var(--area-chart-2)",
  },
};

export function RevenueChart() {
  return (
    <div className="col-span-full flex flex-col gap-4 rounded-2xl bg-primary-light p-6 lg:col-span-3">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        <p className="font-semibold text-sm">Revenue</p>
        <div className="h-4 w-px bg-foreground/20 max-md:hidden" />
        <div className="flex items-center gap-1.5">
          <div className="size-1.5 shrink-0 rounded-full bg-primary-brand" />
          <div className="text-xs">
            Current Week <span className="font-semibold">$58,211</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1.5 shrink-0 rounded-full bg-secondary-cyan" />
          <div className="text-xs">
            Previous Week <span className="font-semibold">$68,768</span>
          </div>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-[240px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 15, right: 15, left: -15, bottom: -5 }}
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
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <defs>
            <linearGradient id="fillPreviousWeek" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-previousWeek)"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="var(--color-previousWeek)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="previousWeek"
            type="natural"
            fill="url(#fillPreviousWeek)"
            stroke="var(--color-previousWeek)"
            strokeWidth={3}
            stackId="a"
          />
          <Area
            dataKey="currentWeek"
            type="natural"
            fill="transparent"
            stroke="var(--color-currentWeek)"
            strokeWidth={3}
            strokeDasharray="6 6"
            stackId="b"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
