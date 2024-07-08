'use client';

import React from 'react';
import { Table } from 'antd';
import useFilter from '@/hooks/useFilter';
import { data } from '@/constants';
import { columns } from '@/utils/tableHelper';

function TablePeserta({
  query,
  jenisKelamin,
  kelas,
  medali,
  tahun,
}: {
  query: string;
  jenisKelamin: string;
  kelas: string;
  medali: string;
  tahun: string;
}) {
  const filterData = useFilter(data, query, jenisKelamin, kelas, medali, tahun);

  return <Table columns={columns} dataSource={filterData} />;
}

export default TablePeserta;
