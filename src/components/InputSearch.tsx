import React from 'react';
import { Input } from 'antd';

function InputSearch({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Input placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
  );
}

export default InputSearch;
