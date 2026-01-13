import { NextResponse } from "next/server";
import {
  portfolioCategories,
  portfolioProjects,
} from "@/data/portfolioProjects";

export async function GET() {
  return NextResponse.json({
    categories: portfolioCategories,
    projects: portfolioProjects,
  });
}

