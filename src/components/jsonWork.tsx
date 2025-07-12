import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JsonDataTable from "./JsonDataTable";
import AppJsonDialog from "./AppJsonDialog";

const JsonWork = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Json Data</CardTitle>
        <CardDescription>View and Share you saved Json Data</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <JsonDataTable />
      </CardContent>
      <CardFooter>
        <AppJsonDialog />
      </CardFooter>
    </Card>
  );
};

export default JsonWork;
