'use client';

import React, { useEffect } from 'react';
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
  asalDaerah,
  provinsi,
  onTotal,
}: {
  query: string;
  jenisKelamin: string;
  kelas: string;
  medali: string;
  tahun: string;
  asalDaerah: string;
  provinsi: string;
  onTotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const filterData = useFilter(
    data,
    query,
    jenisKelamin,
    kelas,
    medali,
    tahun,
    asalDaerah,
    provinsi
  );

  useEffect(() => {
    onTotal(filterData.length);
  }, [filterData.length, onTotal]);

  return (
    <Table
      columns={columns}
      dataSource={filterData}
    />
  );
}

export default TablePeserta;
