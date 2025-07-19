import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency } from "@/lib/utils";

const chartData = [
  { channel: "Direct", sales: 300.56, fill: "var(--pie-chart-1)" },
  { channel: "Affilliate", sales: 135.18, fill: "var(--pie-chart-2)" },
  { channel: "Sponsored", sales: 154.02, fill: "var(--pie-chart-3)" },
  { channel: "E-mail", sales: 48.96, fill: "var(--pie-chart-4)" },
];

const chartConfig = {
  sales: {
    label: "Sales",
  },
  direct: {
    label: "Direct",
    color: "var(--pie-chart-1)",
  },
  affilliate: {
    label: "Affilliate",
    color: "var(--pie-chart-2)",
  },
  sponsored: {
    label: "Sponsored",
    color: "var(--pie-chart-3)",
  },
  email: {
    label: "E-mail",
    color: "var(--pie-chart-4)",
  },
};

export function TotalSales() {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, []);

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-primary-light p-6 max-md:row-start-6 max-lg:row-span-1 max-lg:row-start-4 lg:col-span-1">
      <p className="font-semibold text-sm">Total Sales</p>

      <div className="w-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-46 lg:max-h-30"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  indicator="line"
                  className="min-w-fit"
                  formatter={(value) =>
                    `${((value / totalSales) * 100).toFixed(1)}%`
                  }
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="channel"
              innerRadius="60%"
              outerRadius="100%"
              paddingAngle={5}
              cornerRadius={8}
            />
          </PieChart>
        </ChartContainer>
      </div>

      <div className="flex flex-col gap-3 text-xs">
        {chartData.map((item) => (
          <div key={item.channel} className="flex items-center py-0.5">
            <div className="flex flex-1 items-center gap-1.5 overflow-hidden">
              <div
                className="size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="truncate">{item.channel}</span>
            </div>

            <p>{formatCurrency(item.sales)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
