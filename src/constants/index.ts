import dataPeserta2012 from '@/data/peserta-2012.json';
import dataPeserta2013 from '@/data/peserta-2013.json';
import dataPeserta2014 from '@/data/peserta-2014.json';
import dataPeserta2016 from '@/data/peserta-2016.json';
import dataPeserta2017 from '@/data/peserta-2017.json';

export interface DataType {
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

const provinsiOptions = [
  ...new Set([...data.map((item) => item.provinsi)]),
].map((val) => ({ value: val, label: val }));
const asalDaerahOptions = [
  ...new Set([
    ...data.map((item) => {
      if (item.asalDaerah && item.asalDaerah !== '') return item.asalDaerah;
      return 'Default';
    }),
  ]),
].map((val) => ({ value: val, label: val }));

const tahunOptions = [
  { value: '2012', label: '2012' },
  { value: '2013', label: '2013' },
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
];

const medaliOptions = [
  { value: 'emas', label: 'Emas' },
  { value: 'perak', label: 'Perak' },
  { value: 'perunggu', label: 'Perunggu' },
];

const kelasOptions = [
  { value: 'X', label: 'X' },
  { value: 'XI', label: 'XI' },
  { value: 'XII', label: 'XII' },
];

const jenisKelaminOptions = [
  { value: 'L', label: 'L' },
  { value: 'P', label: 'P' },
];

export {
  data,
  provinsiOptions,
  asalDaerahOptions,
  tahunOptions,
  medaliOptions,
  kelasOptions,
  jenisKelaminOptions,
};
