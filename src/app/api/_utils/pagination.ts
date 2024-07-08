import db from '@/configs/db';

interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
  totalData: number;
  nextPage?: number | null;
  prevPage?: number | null;
}

async function getPagination(page: number, limit: number): Promise<Pagination> {
  const sql = 'SELECT COUNT(*) AS total FROM customer';

  const [results, fields] = await db.execute(sql);

  const totalData = (results as any[])[0].total;

  if (page < 1) {
    page = 1;
  }

  if (limit > totalData) {
    limit = totalData;
  }

  const totalPages = Math.ceil((results as any[])[0].total / limit);

  return {
    page,
    limit,
    totalData,
    totalPages,
    nextPage: page >= totalData ? null : page + 1,
    prevPage: page <= 1 ? null : page - 1,
  };
}

export default getPagination;
