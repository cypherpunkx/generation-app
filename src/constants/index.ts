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

export { data };
