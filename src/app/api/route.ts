import { NextResponse } from 'next/server'
import images from '../../../data/images.json'

export async function GET(request: Request) {
  return NextResponse.json(images);
}