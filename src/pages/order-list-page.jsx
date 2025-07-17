import * as React from "react";
import {
  AddIcon,
  ArrowsDownUpIcon,
  CalendarBlankIcon,
  ClipboardTextIcon,
  FunnelSimpleIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders } from "@/lib/data.json";
import { cn } from "@/lib/utils";

const statusConfig = {
  progress: {
    title: "In Progress",
    bgColor: "bg-secondary-indigo",
    color: "#8A8CD9",
  },
  complete: {
    title: "Complete",
    bgColor: "bg-secondary-green",
    color: "#4AA785",
  },
  pending: {
    title: "Pending",
    bgColor: "bg-secondary-blue",
    color: "#59A8D4",
  },
  approved: {
    title: "Approved",
    bgColor: "bg-secondary-yellow",
    color: "#FFC555",
  },
  rejected: {
    title: "Rejected",
    bgColor: "bg-foreground/40",
    color: "text-foreground/40",
  },
};

export default function OrderListPage() {
  return (
    <div className="p-4 md:p-7">
      <div className="mb-4 px-2 py-1 font-semibold text-sm">Order List</div>

      <div className="mb-3 flex h-11 items-center gap-2 rounded-lg bg-primary-light px-2">
        <div className="flex grow items-center gap-2">
          <Button variant="ghost" size="icon">
            <AddIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <FunnelSimpleIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowsDownUpIcon />
          </Button>
        </div>

        <div>
          <Input
            type="text"
            variant="white"
            placeholder="Search"
            prefix={<SearchIcon />}
            className="w-[160px]"
          />
        </div>
      </div>

      <OrderTable orders={orders} />
    </div>
  );
}

const OrderTable = React.memo(({ orders }) => {
  const [selectedOrderIds, setSelectedOrderIds] = React.useState([]);

  const isAllSelected =
    orders.length > 0 && selectedOrderIds.length === orders.length;
  const isSomeSelected =
    selectedOrderIds.length > 0 && selectedOrderIds.length < orders.length;

  const handleSelectRow = (id) => {
    setSelectedOrderIds((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((orderId) => orderId !== id)
        : [...prevSelected, id],
    );
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedOrderIds([]);
    } else {
      setSelectedOrderIds(orders.map((order) => order.id));
    }
  };

  return (
    <div>
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="border-foreground/20 hover:bg-transparent">
            <TableHead className="w-12">
              <Checkbox
                id="select-all"
                checked={
                  isAllSelected || (isSomeSelected ? "indeterminate" : false)
                }
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => {
            const { title, bgColor, color } = statusConfig[order.status];
            const isSelected = selectedOrderIds.includes(order.id);

            return (
              <TableRow key={order.id} className="group last:!border-b">
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => handleSelectRow(order.id)}
                    className={cn(
                      "opacity-0 transition-opacity group-hover:opacity-100 max-md:opacity-100",
                      isSelected && "opacity-100",
                    )}
                  />
                </TableCell>
                <TableCell>#{order.orderId}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={order.user.avatar}
                      alt={order.user.name}
                      className="size-6 shrink-0 rounded-full object-cover"
                    />
                    <span>{order.user.name}</span>
                  </div>
                </TableCell>

                <TableCell>{order.project}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-1">
                    <span>{order.address}</span>
                    <ClipboardTextIcon className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 max-md:opacity-100" />
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-1">
                    <CalendarBlankIcon className="size-4 shrink-0" />
                    <span>{order.date}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div
                    className={cn("flex items-center gap-1.5", color)}
                    style={{
                      color,
                    }}
                  >
                    <div
                      className={cn("size-1.5 shrink-0 rounded-full", bgColor)}
                    />
                    <span>{title}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="opacity-0 transition-opacity group-hover:opacity-100 max-md:opacity-100">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                          View payment details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination className="mt-3 flex items-center justify-center md:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
});
