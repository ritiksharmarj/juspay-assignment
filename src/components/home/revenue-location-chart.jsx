import * as React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locationData = [
  {
    id: 1,
    location: "New York",
    revenue: 72000,
    coordinates: [-74.006, 40.7128],
  },
  {
    id: 2,
    location: "San Francisco",
    revenue: 39000,
    coordinates: [-122.4194, 37.7749],
  },
  {
    id: 3,
    location: "Sydney",
    revenue: 25000,
    coordinates: [151.2093, -33.8688],
  },
  {
    id: 4,
    location: "Singapore",
    revenue: 61000,
    coordinates: [103.8198, 1.3521],
  },
];

export function RevenueLocationChart() {
  const maxRevenue = React.useMemo(
    () => Math.max(...locationData.map((item) => item.revenue)),
    [],
  );

  const formatRevenue = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value;
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-primary-light p-6 max-lg:row-span-1 max-lg:row-start-4 lg:col-span-1">
      <p className="font-semibold text-sm">Revenue by Location</p>

      <MapComp locations={locationData} />

      <div className="flex flex-col gap-4">
        {locationData.map((item) => (
          <div key={item.id} className="flex flex-col gap-0.5 text-xs">
            <div className="flex items-center">
              <div className="grow">{item.location}</div>
              <div>{formatRevenue(item.revenue)}</div>
            </div>

            <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-secondary-cyan/20">
              <div
                className="size-full flex-1 rounded-full bg-secondary-cyan transition-all"
                style={{
                  transform: `translateX(-${100 - ((item.revenue / maxRevenue) * 100 || 0)}%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MapComp = React.memo(({ locations }) => {
  return (
    <div className="w-full">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-secondary-cyan stroke-background"
              />
            ))
          }
        </Geographies>
        {locations.map(({ location, coordinates }) => (
          <Tooltip key={location}>
            <TooltipTrigger asChild>
              <Marker coordinates={coordinates}>
                <circle
                  r={15}
                  className="fill-primary-brand stroke-3 stroke-white"
                />
              </Marker>
            </TooltipTrigger>
            <TooltipContent>
              <p>{location}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </ComposableMap>
    </div>
  );
});
