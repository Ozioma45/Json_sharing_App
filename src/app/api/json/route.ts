import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, content } = await request.json();

  try {
    const json = await prisma.jsonData.create({
      data: {
        name,
        content,
        userId,
      },
    });

    return NextResponse.json(json);
  } catch (error) {
    console.log("Error saving Json", error);
    return NextResponse.json({ error: "Error Saving JSON" }, { status: 500 });
  }
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await prisma.jsonData.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });

    return NextResponse.json(json);
  } catch (error) {
    console.log("Error Fetching Json", error);
    return NextResponse.json({ error: "Error Fetching JSON" }, { status: 500 });
  }
}
