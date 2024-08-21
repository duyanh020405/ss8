import { NextResponse } from "next/server"
const users =[
  {
    id : 1,
    name :"Duy Anh"
  },
  {
    id : 2,
    name :"Duy Anh 2"
  },
  {
    id : 3,
    name :"Duy Anh 3"
  }
]
export async function GET() {
  return NextResponse.json({
    data:users
  })
}
