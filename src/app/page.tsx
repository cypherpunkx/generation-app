import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import TabList from '@/components/TabList';

const content = (
  <>
    <Paragraph>
      <strong>OSN</strong> (Olimpiade Sains Nasional) merupakan olimpiade
      tahunan tingkat SMA/sederajat yang diadakan oleh:{' '}
    </Paragraph>
    <ul className="list-disc px-8">
      <li>
        Balai Pengembangan Talenta Indonesia (BPTI) (sebelumnya Pusat Prestasi
        Nasional (Puspresnas), sebelumnya Direktorat SMA), Kemendikbudristek
        Republik Indonesia,
      </li>
    </ul>
    <Paragraph>
      dan didukung oleh Ikatan Alumni TOKI (Tim Olimpiade Komputer Indonesia).
    </Paragraph>
    <Paragraph>
      Bidang <strong>informatika</strong> (dahulu komputer) merupakan salah satu
      bidang yang dilombakan, yang menguji penyelesaian masalah (problem
      solving) melalui soal-soal pemrograman (
      <strong>competitive programming</strong>).
    </Paragraph>{' '}
    <Paragraph>
      Untuk dapat bertanding di OSN tingkat nasional, siswa harus ditunjuk
      melalui pihak sekolah untuk mengikuti OSN tingkat kota/kabupaten (
      <strong>OSN-K</strong>) terlebih dahulu. Kemudian, para siswa terbaik
      tingkat kota akan ditandingkan di tingkat provinsi{' '}
      <strong>(OSN-P)</strong> dan kemudian nasional (<strong>OSN</strong>).
    </Paragraph>
    <Paragraph>
      Para medalis akan diseleksi lebih lanjut untuk memilih 4 siswa yang akan
      mewakili Indonesia pada ajang International Olympiad in Informatics (
      <strong>IOI</strong>).
    </Paragraph>
  </>
);

export default function Home() {
  return (
    <div className="my-4">
      <TabList content={content} />
    </div>
  );
}
