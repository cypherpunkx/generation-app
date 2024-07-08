'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { Card } from 'antd';

const tabList = [
  {
    key: 'beranda',
    tab: 'Beranda',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const TabList: React.FC<{ content: ReactNode }> = ({ content }) => {
  const [activeTabKey, setActiveTabKey] = useState<string>('beranda');

  const contentList: Record<string, React.ReactNode> = {
    beranda: content,
    tab2: <p>content2</p>,
  };

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <Card
      style={{ width: '100%' }}
      title="Silabus OSN-P 2024 sudah dirilis."
      extra={<a href="#">More</a>}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
    >
      {contentList[activeTabKey]}
    </Card>
  );
};

export default TabList;
