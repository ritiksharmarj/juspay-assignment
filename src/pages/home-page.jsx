import { Metrics } from "@/components/home/metrics";
import { ProjectionsActualsChart } from "@/components/home/projections-actuals-chart";
import { RevenueChart } from "@/components/home/revenue-chart";

export default function HomePage() {
  return (
    <div className="p-7">
      <div className="mb-4 px-2 py-1 font-semibold text-sm">eCommerce</div>

      <div className="grid grid-cols-4 gap-7">
        <Metrics />
        <ProjectionsActualsChart />
        <RevenueChart />
      </div>
    </div>
  );
}
