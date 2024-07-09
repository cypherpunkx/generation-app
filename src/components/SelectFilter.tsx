import React from 'react';
import { Select, Space } from 'antd';
import {
  asalDaerahOptions,
  jenisKelaminOptions,
  kelasOptions,
  medaliOptions,
  provinsiOptions,
  tahunOptions,
} from '@/constants';

function SelectFilter({
  setKelas,
  setJenisKelamin,
  setTahun,
  setMedali,
  setAsalDaerah,
  setProvinsi,
}: {
  setKelas: React.Dispatch<React.SetStateAction<string>>;
  setJenisKelamin: React.Dispatch<React.SetStateAction<string>>;
  setMedali: React.Dispatch<React.SetStateAction<string>>;
  setTahun: React.Dispatch<React.SetStateAction<string>>;
  setAsalDaerah: React.Dispatch<React.SetStateAction<string>>;
  setProvinsi: React.Dispatch<React.SetStateAction<string>>;
}) {
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

  const handleChangeAsalDaerah = (value: string) => {
    console.log(`selected ${value}`);
    setAsalDaerah(value);
  };

  const handleChangeProvinsi = (value: string) => {
    console.log(`selected ${value}`);
    setProvinsi(value);
  };

  return (
    <Space>
      <Select
        defaultValue="Jenis Kelamin"
        onChange={handleChangeJenisKelamin}
        style={{ width: 120 }}
        allowClear
        options={jenisKelaminOptions}
      />
      <Select
        defaultValue="Kelas"
        onChange={handleChangeKelas}
        style={{ width: 120 }}
        allowClear
        // loading
        options={kelasOptions}
      />
      <Select
        defaultValue="Asal Daerah"
        onChange={handleChangeAsalDaerah}
        style={{ width: 120 }}
        allowClear
        // loading
        options={asalDaerahOptions}
      />
      <Select
        defaultValue="Provinsi"
        onChange={handleChangeProvinsi}
        style={{ width: 120 }}
        allowClear
        options={provinsiOptions}
      />
      <Select
        defaultValue="Medali"
        onChange={handleChangeMedali}
        style={{ width: 120 }}
        allowClear
        options={medaliOptions}
      />
      <Select
        defaultValue="Tahun"
        onChange={handleChangeTahun}
        style={{ width: 120 }}
        allowClear
        // disabled
        options={tahunOptions}
      />
    </Space>
  );
}

export default SelectFilter;
