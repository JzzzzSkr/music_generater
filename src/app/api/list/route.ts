import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  return NextResponse.json({
    success: true,
    errorMessgae: "获取数据成功",
    data: [],
  });
};

