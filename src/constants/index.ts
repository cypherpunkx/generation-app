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

const rawData = [
  ...dataPeserta2012,
  ...dataPeserta2013,
  ...dataPeserta2014,
  ...dataPeserta2016,
  ...dataPeserta2017,
];

const data: DataType[] = rawData.map((peserta, index) => ({
  ...peserta,
  key: index + 1,
  no: index + 1,
}));

const createOptions = (items: string[], defaultLabel = 'Default') => {
  const uniqueItems = [...new Set(items)];
  return uniqueItems.map((val) => ({
    value: val || defaultLabel,
    label: val || defaultLabel,
  }));
};

const provinsiOptions = createOptions(data.map((item) => item.provinsi!));
const asalDaerahOptions = createOptions(data.map((item) => item.asalDaerah!));
const tahunOptions = createOptions([
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
]);
const medaliOptions = createOptions(['emas', 'perak', 'perunggu'], '');
const kelasOptions = createOptions(['X', 'XI', 'XII'], '');
const jenisKelaminOptions = createOptions(['L', 'P'], '');

export {
  data,
  provinsiOptions,
  asalDaerahOptions,
  tahunOptions,
  medaliOptions,
  kelasOptions,
  jenisKelaminOptions,
};
