"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

interface JsonData {
  id: string;
  name: string;
  createdAt: string;
  content: any;
}

const JsonViewPage = () => {
  const { id } = useParams();
  const [jsonData, setJsonData] = useState<JsonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/json/${id}`);
      const data = await response.json();

      setJsonData(data);
    } catch (error) {
      console.error("Failed to Fetch Data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!jsonData) return <p>No data found.</p>;

  return (
    <div className="mt-8 space-y-4">
      <h1 className="text-2xl font-bold underline">{jsonData.name}</h1>
      <p className="text-sm text-gray-500">
        Created on: {new Date(jsonData.createdAt).toLocaleString()}
      </p>
      <CodeMirror
        value={JSON.stringify(jsonData.content, null, 2)}
        height="300px"
        extensions={[json()]}
        editable={false}
        className="border shadow-sm"
      />
    </div>
  );
};

export default JsonViewPage;
