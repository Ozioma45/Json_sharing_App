import React from "react";
import JsonWork from "@/components/jsonWork";

const page = () => {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage Your Data and share it with others
        </p>
      </div>
      <JsonWork />
    </div>
  );
};

export default page;
