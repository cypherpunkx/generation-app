'use client';

import InputSearch from '@/components/InputSearch';
import SelectFilter from '@/components/SelectFilter';
import TablePeserta from '@/components/TablePeserta';
import React, { useState } from 'react';

export default function Page() {
  const [query, setQuery] = useState('');
  const [jenisKelamin, setjenisKelamin] = useState('');
  const [kelas, setKelas] = useState('');
  const [tahun, setTahun] = useState('');
  const [medali, setMedali] = useState('');

  return (
    <>
      <header className="flex gap-1 mx-auto my-6">
        <InputSearch setQuery={setQuery} />
        <SelectFilter
          setJenisKelamin={setjenisKelamin}
          setKelas={setKelas}
          setMedali={setMedali}
          setTahun={setTahun}
        />
      </header>
      <TablePeserta
        query={query}
        jenisKelamin={jenisKelamin}
        kelas={kelas}
        tahun={tahun}
        medali={medali}
      />
    </>
  );
}
