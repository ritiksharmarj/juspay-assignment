import * as React from "react";
import { products } from "@/lib/data.json";
import { formatCurrency } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function TopSellingProducts() {
  return (
    <div className="col-span-full flex flex-col gap-4 rounded-2xl bg-primary-light p-6 lg:col-span-3">
      <p className="font-semibold text-sm">Top Selling Products</p>

      <ProductTable products={products} />
    </div>
  );
}

const ProductTable = React.memo(({ products }) => {
  return (
    <Table className="text-xs">
      <TableHeader>
        <TableRow className="border-foreground/20 hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id} className="border-0">
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{formatCurrency(product.amount)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});
