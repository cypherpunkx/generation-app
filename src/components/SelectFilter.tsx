import React from 'react';

import { Select, Space } from 'antd';

function SelectFilter({
  setKelas,
  setJenisKelamin,
  setTahun,
  setMedali,
}: {
  setKelas: React.Dispatch<React.SetStateAction<string>>;
  setJenisKelamin: React.Dispatch<React.SetStateAction<string>>;
  setMedali: React.Dispatch<React.SetStateAction<string>>;
  setTahun: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleChangeJenisKelamin = (value: string) => {
    console.log(`selected ${value}`);
    setJenisKelamin(value);
  };
  const handleChangeKelas = (value: string) => {
    console.log(`selected ${value}`);
    setKelas(value);
  };
  const handleChangeMedali = (value: string) => {
    console.log(`selected ${value}`);
    setMedali(value);
  };
  const handleChangeTahun = (value: string) => {
    console.log(`selected ${value}`);
    setTahun(value);
  };

  return (
    <Space>
      <Select
        defaultValue="Jenis Kelamin"
        onChange={handleChangeJenisKelamin}
        style={{ width: 120 }}
        allowClear
        options={[
          { value: 'L', label: 'L' },
          { value: 'P', label: 'P' },
        ]}
      />
      <Select
        defaultValue="Kelas"
        onChange={handleChangeKelas}
        style={{ width: 120 }}
        allowClear
        // loading
        options={[
          { value: 'X', label: 'X' },
          { value: 'XI', label: 'XI' },
          { value: 'XII', label: 'XII' },
        ]}
      />
      <Select
        defaultValue="Asal Daerah"
        onChange={handleChange}
        style={{ width: 120 }}
        allowClear
        disabled
        // loading
        options={[{ value: 'lucy', label: 'Lucy' }]}
      />
      <Select
        defaultValue="Provinsi"
        onChange={handleChange}
        style={{ width: 120 }}
        disabled
        allowClear
        options={[
          { value: 'Jawa Tengah', label: 'Jawa Tengah' },
          { value: 'Jawa Barat', label: 'Jawa Barat' },
          { value: 'D. I. Yogyakarta', label: 'D. I. Yogyakarta' },
        ]}
      />
      <Select
        defaultValue="Medali"
        onChange={handleChangeMedali}
        style={{ width: 120 }}
        allowClear
        options={[
          { value: 'emas', label: 'Emas' },
          { value: 'perak', label: 'Perak' },
          { value: 'perunggu', label: 'Perunggu' },
        ]}
      />
      <Select
        defaultValue="Tahun"
        onChange={handleChangeTahun}
        style={{ width: 120 }}
        allowClear
        // disabled
        options={[
          { value: '2012', label: '2012' },
          { value: '2013', label: '2013' },
          { value: '2014', label: '2014' },
          { value: '2015', label: '2015' },
          { value: '2016', label: '2016' },
          { value: '2017', label: '2017' },
        ]}
      />
    </Space>
  );
}

export default SelectFilter;
