import { Metrics } from "@/components/home/metrics";
import { ProjectionsActualsChart } from "@/components/home/projections-actuals-chart";
import { RevenueChart } from "@/components/home/revenue-chart";
import { RevenueLocationChart } from "@/components/home/revenue-location-chart";
import { TopSellingProducts } from "@/components/home/top-selling-products";
import { TotalSales } from "@/components/home/total-sales";

export default function HomePage() {
  return (
    <div className="p-4 md:p-7">
      <div className="mb-4 px-2 py-1 font-semibold text-sm">eCommerce</div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
        <Metrics />
        <ProjectionsActualsChart />
        <RevenueChart />
        <RevenueLocationChart />
        <TopSellingProducts />
        <TotalSales />
      </div>
    </div>
  );
}
