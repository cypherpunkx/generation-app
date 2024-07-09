'use client';

import React, { useState } from 'react';
import { Badge, Tag } from 'antd';
import InputSearch from '@/components/InputSearch';
import SelectFilter from '@/components/SelectFilter';
import TablePeserta from '@/components/TablePeserta';
import { data } from '@/constants';

export default function Page() {
  const [query, setQuery] = useState('');
  const [jenisKelamin, setjenisKelamin] = useState('');
  const [kelas, setKelas] = useState('');
  const [tahun, setTahun] = useState('');
  const [medali, setMedali] = useState('');
  const [asalDaerah, setAsalDaerah] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [total, setTotal] = useState(data.length);

  return (
    <>
      <header className="flex gap-1 mx-auto mt-6">
        <InputSearch setQuery={setQuery} />
        <SelectFilter
          setJenisKelamin={setjenisKelamin}
          setKelas={setKelas}
          setMedali={setMedali}
          setTahun={setTahun}
          setAsalDaerah={setAsalDaerah}
          setProvinsi={setProvinsi}
        />
      </header>
      <div className="flex items-center my-4 gap-1">
        <Tag color="#52c41a">Total: {total}</Tag>
      </div>
      <TablePeserta
        query={query}
        jenisKelamin={jenisKelamin}
        kelas={kelas}
        tahun={tahun}
        medali={medali}
        asalDaerah={asalDaerah}
        provinsi={provinsi}
        onTotal={setTotal}
      />
    </>
  );
}
