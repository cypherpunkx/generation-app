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
  tahun: string,
  asalDaerah: string,
  provinsi: string
) {
  const filterData = data.filter((item) => {
    const hasQuery =
      item.nama!.toLowerCase().includes(query.toLowerCase()) ||
      item.sekolah!.toLowerCase().includes(query.toLowerCase());

    const isJenisKelamin =
      item.jenisKelamin?.toLowerCase() === jenisKelamin?.toLowerCase();

    const isKelas =
      item.kelas?.toString().toLowerCase() === kelas?.toLowerCase();

    const isAsalDaerah =
      item.asalDaerah?.toString().toLowerCase() === asalDaerah?.toLowerCase();

    const isProvinsi =
      item.provinsi?.toString().toLowerCase() === provinsi?.toLowerCase();

    const isMedali =
      item.medali?.toString().toLowerCase() === medali?.toLowerCase();

    const isTahun =
      item.tahun?.toString().toLowerCase() === tahun?.toLowerCase();

    if (jenisKelamin && kelas && asalDaerah && provinsi && medali && tahun) {
      return (
        isJenisKelamin &&
        isKelas &&
        isAsalDaerah &&
        isProvinsi &&
        isMedali &&
        isTahun
      );
    }

    if (jenisKelamin && kelas && asalDaerah && provinsi && medali) {
      return (
        isJenisKelamin && isKelas && isAsalDaerah && isProvinsi && isMedali
      );
    }

    if (jenisKelamin && kelas && asalDaerah && provinsi && tahun) {
      return isJenisKelamin && isKelas && isAsalDaerah && isProvinsi && isTahun;
    }

    if (jenisKelamin && kelas && asalDaerah && provinsi) {
      return isJenisKelamin && isKelas && isAsalDaerah && isProvinsi;
    }

    if (jenisKelamin && kelas && asalDaerah && medali) {
      return isJenisKelamin && isKelas && isAsalDaerah && isMedali;
    }

    if (jenisKelamin && kelas && asalDaerah && tahun) {
      return isJenisKelamin && isKelas && isAsalDaerah && isTahun;
    }

    if (query && jenisKelamin && kelas) {
      return hasQuery && isJenisKelamin && isKelas;
    }

    if (query && jenisKelamin && asalDaerah) {
      return hasQuery && isJenisKelamin && isAsalDaerah;
    }

    if (query && jenisKelamin && provinsi) {
      return hasQuery && isJenisKelamin && isProvinsi;
    }
    if (query && jenisKelamin && medali) {
      return hasQuery && isJenisKelamin && isMedali;
    }
    if (query && jenisKelamin && tahun) {
      return hasQuery && isJenisKelamin && isTahun;
    }

    if (query && kelas && asalDaerah) {
      return hasQuery && isKelas && isAsalDaerah;
    }

    if (query && kelas && provinsi) {
      return hasQuery && isKelas && isProvinsi;
    }

    if (query && kelas && medali) {
      return hasQuery && isKelas && isMedali;
    }

    if (query && kelas && tahun) {
      return hasQuery && isKelas && isTahun;
    }

    if (query && asalDaerah && provinsi) {
      return hasQuery && isAsalDaerah && isProvinsi;
    }

    if (query && asalDaerah && medali) {
      return hasQuery && isAsalDaerah && isMedali;
    }

    if (query && asalDaerah && tahun) {
      return hasQuery && isAsalDaerah && isTahun;
    }

    if (query && provinsi && medali) {
      return hasQuery && isProvinsi && isMedali;
    }

    if (query && provinsi && tahun) {
      return hasQuery && isProvinsi && isTahun;
    }

    if (query && provinsi && tahun) {
      return hasQuery && isProvinsi && isTahun;
    }

    if (jenisKelamin && kelas && asalDaerah) {
      return isJenisKelamin && isKelas && isAsalDaerah;
    }

    if (jenisKelamin && kelas && provinsi) {
      return isJenisKelamin && isKelas && isProvinsi;
    }

    if (jenisKelamin && kelas && medali) {
      return isJenisKelamin && isKelas && isMedali;
    }

    if (jenisKelamin && kelas && tahun) {
      return isJenisKelamin && isKelas && isTahun;
    }

    if (jenisKelamin && asalDaerah && provinsi) {
      return isJenisKelamin && isAsalDaerah && isProvinsi;
    }

    if (jenisKelamin && asalDaerah && medali) {
      return isJenisKelamin && isAsalDaerah && isMedali;
    }

    if (jenisKelamin && asalDaerah && tahun) {
      return isJenisKelamin && isAsalDaerah && isTahun;
    }

    if (jenisKelamin && provinsi && medali) {
      return isJenisKelamin && isProvinsi && isMedali;
    }

    if (jenisKelamin && provinsi && tahun) {
      return isJenisKelamin && isProvinsi && isTahun;
    }

    if (jenisKelamin && medali && tahun) {
      return isJenisKelamin && isMedali && isTahun;
    }

    if (kelas && asalDaerah && provinsi) {
      return isKelas && isAsalDaerah && isProvinsi;
    }

    if (kelas && asalDaerah && medali) {
      return isKelas && isAsalDaerah && isMedali;
    }

    if (kelas && asalDaerah && tahun) {
      return isKelas && isAsalDaerah && isTahun;
    }

    if (asalDaerah && provinsi && medali) {
      return isAsalDaerah && isProvinsi && isMedali;
    }

    if (asalDaerah && provinsi && tahun) {
      return isAsalDaerah && isProvinsi && isTahun;
    }
    if (provinsi && medali && tahun) {
      return isProvinsi && medali && isTahun;
    }

    if (query && jenisKelamin) {
      return hasQuery && isJenisKelamin;
    }

    if (query && kelas) {
      return hasQuery && isKelas;
    }

    if (query && asalDaerah) {
      return hasQuery && isAsalDaerah;
    }

    if (query && provinsi) {
      return hasQuery && isProvinsi;
    }

    if (query && medali) {
      return hasQuery && isMedali;
    }

    if (query && tahun) {
      return hasQuery && isTahun;
    }

    if (jenisKelamin && kelas) {
      return isJenisKelamin && isKelas;
    }

    if (jenisKelamin && asalDaerah) {
      return isJenisKelamin && isAsalDaerah;
    }

    if (jenisKelamin && provinsi) {
      return isJenisKelamin && isProvinsi;
    }

    if (jenisKelamin && medali) {
      return isJenisKelamin && isMedali;
    }

    if (jenisKelamin && tahun) {
      return isJenisKelamin && isTahun;
    }

    if (kelas && asalDaerah) {
      return isKelas && isAsalDaerah;
    }

    if (kelas && provinsi) {
      return isKelas && isProvinsi;
    }

    if (kelas && medali) {
      return isKelas && isMedali;
    }

    if (kelas && tahun) {
      return isKelas && isTahun;
    }

    if (asalDaerah && provinsi) {
      return isAsalDaerah && isProvinsi;
    }

    if (asalDaerah && medali) {
      return isAsalDaerah && isMedali;
    }

    if (asalDaerah && tahun) {
      return isAsalDaerah && isTahun;
    }

    if (provinsi && medali) {
      return isProvinsi && isMedali;
    }

    if (provinsi && tahun) {
      return isProvinsi && tahun;
    }

    if (medali && tahun) {
      return isMedali && isTahun;
    }

    if (jenisKelamin) {
      return isJenisKelamin;
    }

    if (kelas) {
      return isKelas;
    }

    if (medali) {
      return isMedali;
    }

    if (tahun) {
      return isTahun;
    }

    if (asalDaerah) {
      return isAsalDaerah;
    }

    if (provinsi) {
      return isProvinsi;
    }

    return hasQuery;
  });

  return filterData;
}

export default useFilter;
