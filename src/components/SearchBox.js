import React from 'react';
import {Space, Input} from 'antd';
const {Search}=Input;

 
const SearchBox = () => {
    
    const onSearch = (value) => {
        console.log(value);
      };
    return (
        <>
            <Space direction="vertical">
            <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="medium"
      onSearch={onSearch}
    />
 </Space>
  </>
  );
};


export default SearchBox;