'use client';

import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Pengenalan/Introduction OSN Kebumian',
    key: 'menu1',
    icon: <MailOutlined />,
  },
  {
    disabled: true,
    label: 'Pengenalan IESO',
    key: 'menu2',
    icon: <AppstoreOutlined />,
  },
  {
    disabled: true,
    label: 'Silabus Kebumian',
    key: 'menu3',
    icon: <AppstoreOutlined />,
  },
  {
    disabled: true,
    label: 'Materi OSN Kebumian',
    key: 'menu4',
    icon: <AppstoreOutlined />,
  },
  {
    disabled: true,
    label: 'Arsip soal',
    key: 'menu5',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <Link href="/peserta-osn" rel="noopener noreferrer">
        Database peserta osn Kebumian
      </Link>
    ),
    key: 'menu6',
    icon: <AppstoreOutlined />,
  },
  {
    disabled: true,
    label: (
      <Link href="/peserta-pelatnas" rel="noopener noreferrer">
        Database peserta pelatnas
      </Link>
    ),
    key: 'menu7',
    icon: <AppstoreOutlined />,
  },
  {
    disabled: true,
    label: 'Database timnas IESO',
    key: 'menu8',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Pembina Kebumian.',
    key: 'menu9',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Silabus Kebumian',
    key: 'menu10',
    icon: <SettingOutlined />,
    disabled: true,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('menu1');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);

    console.log(e.key);

    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
