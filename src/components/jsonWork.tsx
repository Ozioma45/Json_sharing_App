"use client";

import { toast } from "sonner";
import React, { useState } from "react";
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
  const [refreshKeys, setRefreshedKey] = useState(0);

  const handleSave = async (jsonName: string, jsonData: string) => {
    const response = await fetch("/api/json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: jsonName, content: jsonData }),
    });

    if (response.ok) {
      setRefreshedKey((prev) => prev + 1);

      toast.success("Data saved successfully");
    } else {
      toast.error("Something went wrong. Try again");
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Json Data</CardTitle>
        <CardDescription>View and Share you saved Json Data</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <JsonDataTable key={refreshKeys} />
      </CardContent>
      <CardFooter>
        <AppJsonDialog onSave={handleSave} />
      </CardFooter>
    </Card>
  );
};

export default JsonWork;
