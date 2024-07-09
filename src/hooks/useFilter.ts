interface DataType {
  no?: number;
  nama?: string;
  jenisKelamin?: 'L' | 'P'; // Laki-laki atau Perempuan
  kelas?: string;
  sekolah?: string;
  asalDaerah?: string;
  provinsi?: string;
  peringkat?: number;
  medali?: string;
  tahun?: number;
}

function useFilter(
  data: DataType[],
  query: string,
  jenisKelamin: string,
  kelas: string,
  medali: string,
  tahun: string,
  asalDaerah: string,
  provinsi: string
) {
  const filterData = data.filter((item) => {
    const hasQuery =
      item.nama?.toLowerCase().includes(query.toLowerCase()) ||
      item.sekolah?.toLowerCase().includes(query.toLowerCase());

    const matches = (field: string | undefined, value: string) =>
      field?.toLowerCase() === value.toLowerCase();

    const conditions = [
      { field: item.jenisKelamin, value: jenisKelamin },
      { field: item.kelas, value: kelas },
      { field: item.asalDaerah, value: asalDaerah },
      { field: item.provinsi, value: provinsi },
      { field: item.medali, value: medali },
      { field: item.tahun?.toString(), value: tahun },
    ];

    const allConditionsMatch = conditions.every(
      ({ field, value }) => !value || matches(field, value)
    );

    return hasQuery && allConditionsMatch;
  });

  return filterData;
}

export default useFilter;
