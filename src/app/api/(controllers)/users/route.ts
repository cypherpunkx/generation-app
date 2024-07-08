import { NextRequest, NextResponse } from 'next/server';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import * as service from '@/app/api/(services)/user.service';
import getPagination from '@/app/api/_utils/pagination';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = +url.searchParams.get('page')! || 1;
  const limit = +url.searchParams.get('perPage')! || 10;

  const offset = (page - 1) * limit;

  try {
    const data = await service.getAllUsers(offset, limit);

    const pagination = await getPagination(page, limit);

    return NextResponse.json(
      {
        data,
        pagination,
      },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
