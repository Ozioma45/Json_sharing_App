import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface JsonData {
  id: string;
  name: string;
  createdAt: string;
  content: any;
}

const JsonDataTable = () => {
  const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch("./api/json");
      const data = await response.json();

      setJsonDataList(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to Fetch Data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return "Loading...";
  }

  if (!jsonDataList.length) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No data Available, Please add new entry
      </div>
    );
  }

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
