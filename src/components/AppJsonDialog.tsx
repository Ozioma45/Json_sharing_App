"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

interface AddJsonDialogProps {
  onSave: (name: string, value: string) => Promise<void>;
}

const AppJsonDialog: React.FC<AddJsonDialogProps> = ({ onSave }) => {
  const [jsonData, setJsonData] = useState("");
  const [jsonName, setJsonName] = useState("");
  const [OpenModal, setOpenModal] = useState<boolean>(false);

  console.log(jsonName, jsonData);

  const handleSave = async () => {
    await onSave(jsonName, jsonData);
    setOpenModal(false);
    setJsonData("");
    setJsonName("");
  };

  return (
    <Dialog open={OpenModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button>Add JSON Data</Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>JSON Editor</DialogTitle>
          <DialogDescription>Edit and Save your JSON Data</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>JSON Name</Label>
            <input
              type="text"
              placeholder="Enter Json Name"
              className="rounded-none"
              value={jsonName}
              onChange={(e) => setJsonName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>JSON Data</Label>
            <CodeMirror
              value={jsonData}
              height="200px"
              extensions={[json()]}
              onChange={(value) => setJsonData(value)}
              className="border shadow-sm"
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={"secondary"}>
                Close
              </Button>
            </DialogClose>
            <Button disabled={!jsonData || !jsonName} onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppJsonDialog;
