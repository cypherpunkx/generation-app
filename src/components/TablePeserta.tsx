'use client';

import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import dataPeserta2012 from '@/data/peserta-2012.json';
import dataPeserta2013 from '@/data/peserta-2013.json';
import dataPeserta2014 from '@/data/peserta-2014.json';
import dataPeserta2016 from '@/data/peserta-2016.json';
import dataPeserta2017 from '@/data/peserta-2017.json';

interface DataType {
  no?: number;
  nama?: string;
  jenisKelamin?: string; // Laki-laki atau Perempuan
  kelas?: string;
  sekolah?: string;
  asalDaerah?: string;
  provinsi?: string;
  peringkat?: number;
  medali?: string;
  tahun?: number;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nama',
    dataIndex: 'nama',
    key: 'nama',
  },
  {
    title: 'Jenis Kelamin',
    dataIndex: 'jenisKelamin',
    key: 'jenisKelamin',
    render: (_, { jenisKelamin }) => {
      return jenisKelamin ? jenisKelamin : '-';
    },
  },
  {
    title: 'Kelas',
    dataIndex: 'kelas',
    key: 'kelas',
    render: (_, { kelas }) => {
      return kelas ? kelas : '-';
    },
  },
  {
    title: 'Sekolah',
    dataIndex: 'sekolah',
    key: 'sekolah',
  },
  {
    title: 'Asal Daerah',
    dataIndex: 'asalDaerah',
    key: 'asalDaerah',
    render: (_, { asalDaerah }) => {
      return asalDaerah ? asalDaerah : '-';
    },
  },
  {
    title: 'Provinsi',
    dataIndex: 'provinsi',
    key: 'provinsi',
  },
  {
    title: 'Medali',
    dataIndex: 'medali',
    key: 'medali',
    render: (_, { medali }) => {
      let color;
      switch (medali) {
        case 'Emas':
          color = 'gold-inverse';
          break;
        case 'Perak':
          color = 'geekblue';
          break;
        case 'Perunggu':
          color = 'volcano-inverse';
          break;
        default:
          color = 'default';
          break;
      }

      return medali ? (
        <Tag color={color} key={medali}>
          {medali ? medali.toUpperCase() : '-'}{' '}
        </Tag>
      ) : (
        '-'
      );
    },
  },
  {
    title: 'Peringkat',
    dataIndex: 'peringkat',
    key: 'peringkat',
    render: (_, { peringkat = '-' }) => {
      return peringkat;
    },
  },
  {
    title: 'Tahun',
    dataIndex: 'tahun',
    key: 'tahun',
  },
  //   {
  //     title: 'Tags',
  //     key: 'tags',
  //     dataIndex: 'tags',
  //     render: (_, { tahun }) => (
  //       <>
  //         {tahun.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green';
  //           if (tag === 'loser') {
  //             color = 'volcano';
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
];

const data: DataType[] = [
  ...dataPeserta2012,
  ...dataPeserta2013,
  ...dataPeserta2014,
  ...dataPeserta2016,
  ...dataPeserta2017,
].map((peserta, index) => ({
  ...peserta,
  key: index + 1,
  no: index + 1,
}));

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
  const filterData = data.filter((item) => {
    if (query && jenisKelamin && kelas && medali && tahun) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase() &&
        item.medali?.toString().toLowerCase() === medali?.toLowerCase()
      );
    }

    if (query && jenisKelamin && medali && kelas) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toString().toLowerCase() === medali?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase()
      );
    }

    if (tahun && jenisKelamin && medali && kelas) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toString().toLowerCase() === medali?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (query && jenisKelamin && kelas) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase()
      );
    }

    if (query && jenisKelamin && medali) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toString().toLowerCase() === medali?.toLowerCase()
      );
    }

    if (query && jenisKelamin && tahun) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (query && medali && tahun) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.medali?.toLowerCase() === medali?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (kelas && medali && tahun) {
      return (
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase() &&
        item.medali?.toLowerCase() === medali?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (jenisKelamin && medali && tahun) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toLowerCase() === medali?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (jenisKelamin && medali && kelas) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toLowerCase() === medali?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase()
      );
    }
    if (jenisKelamin && tahun && kelas) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase() &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase()
      );
    }

    if (kelas && medali && tahun) {
      return (
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase() &&
        item.medali?.toLowerCase() === medali?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (query && jenisKelamin) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase()
      );
    }

    if (query && kelas) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.kelas?.toString().toLowerCase() === kelas?.toLowerCase()
      );
    }

    if (query && medali) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.medali?.toString().toLowerCase() === medali?.toLowerCase()
      );
    }

    if (query && tahun) {
      return (
        (item.nama!.toLowerCase().includes(query.toLowerCase()) ||
          item.sekolah!.toLowerCase().includes(query.toLowerCase())) &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (jenisKelamin && tahun) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase()
      );
    }

    if (jenisKelamin && kelas) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.kelas?.toLowerCase() === kelas.toLowerCase()
      );
    }

    if (jenisKelamin && medali) {
      return (
        item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase() &&
        item.medali?.toLowerCase() === medali.toLowerCase()
      );
    }

    if (kelas && medali) {
      return (
        item.medali?.toString().toLowerCase() === medali?.toLowerCase() &&
        item.kelas?.toLowerCase() === kelas.toLowerCase()
      );
    }

    if (kelas && tahun) {
      return (
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase() &&
        item.kelas?.toLowerCase() === kelas.toLowerCase()
      );
    }

    if (medali && tahun) {
      return (
        item.tahun?.toString().toLowerCase() === tahun?.toLowerCase() &&
        item.medali?.toLowerCase() === medali.toLowerCase()
      );
    }

    if (jenisKelamin) {
      return item.jenisKelamin?.toLowerCase() === jenisKelamin.toLowerCase();
    }

    if (kelas) {
      return item.kelas?.toLowerCase() === kelas.toLowerCase();
    }

    if (medali) {
      return item.medali?.toLowerCase() === medali.toLowerCase();
    }

    if (tahun) {
      return item.tahun?.toString().toLowerCase() === tahun.toLowerCase();
    }

    return (
      item.nama?.toLowerCase().includes(query.toLowerCase()) ||
      item.sekolah?.toLowerCase().includes(query.toLowerCase())
    );
  });

  return <Table columns={columns} dataSource={filterData} />;
}

export default TablePeserta;
