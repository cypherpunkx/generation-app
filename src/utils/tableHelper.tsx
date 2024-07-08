import { DataType } from '@/constants';
import { TableProps, Tag } from 'antd';

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
];

export { columns };
