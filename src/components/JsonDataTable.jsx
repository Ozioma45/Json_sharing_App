import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns"; // ✅ Correct import

const jsonDataList = [
  { id: "jhvsiufsfsdfkj", name: "Test", createdAt: "2024-04-23" },
];

const JsonDataTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className="sr-only">Share</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>
              {format(new Date(data.createdAt), "MMM d, yyyy")}
            </TableCell>
            {/* <TableCell>
              <button className="text-blue-500 hover:underline">Share</button>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JsonDataTable;
