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

function useFilter(
  data: DataType[],
  query: string,
  jenisKelamin: string,
  kelas: string,
  medali: string,
  tahun: string
) {
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

  return filterData;
}

export default useFilter;
