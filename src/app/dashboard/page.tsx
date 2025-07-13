import React from "react";
import JsonWork from "@/components/jsonWork";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  const loggedUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedUser) {
    await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

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
