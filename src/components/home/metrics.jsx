import NumberFlow from "@number-flow/react";
import * as React from "react";
import { metrics } from "@/lib/data.json";
import { cn } from "@/lib/utils";
import { ArrowFallIcon, ArrowRiseIcon } from "../icons";

const metricConfig = {
  customers: {
    bgColor: "bg-primary-blue dark:text-background",
  },
  orders: {
    bgColor: "bg-primary-light",
  },
  revenue: {
    bgColor: "bg-primary-light",
  },
  growth: {
    bgColor: "bg-primary-purple dark:text-background",
  },
};

function MetricCard({ metric }) {
  const Icon = metric.changeType === "increase" ? ArrowRiseIcon : ArrowFallIcon;
  const { bgColor } = metricConfig[metric.type];

  return (
    <div className={cn("flex flex-col gap-2 rounded-2xl p-6", bgColor)}>
      <p className="font-semibold text-sm">{metric.title}</p>
      <div className="flex items-center">
        <NumberFlow
          value={metric.value}
          prefix={metric.prefix}
          suffix={metric.suffix}
          className="font-semibold text-2xl"
        />
        <div className="flex grow items-center justify-end gap-1 text-xs">
          <span>{metric.change}</span>
          <Icon className="size-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}

export function Metrics() {
  const [currentMetrics, setCurrentMetrics] = React.useState(() =>
    metrics.map((m) => ({ ...m, value: 0 })),
  );

  // Delay to trigger the animation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMetrics(metrics);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col-span-full grid grid-cols-1 gap-7 md:col-span-2 md:grid-cols-2">
      {currentMetrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
}
