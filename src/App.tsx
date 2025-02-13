import React from 'react';
import './App.css';
// import { useQuery } from '@apollo/client';
import {
  Form,
  Button,
  ImageUploader,
} from 'antd-mobile';
// import { FIND } from './graphql/demo';
import { useUploadOSS } from './hooks/useUploadOSS';

const App = () => {
  const uploadHandler = useUploadOSS();
  // const { loading, data } = useQuery(FIND, {
  //   variables: {
  //     id: 'abdeafed-9f52-4157-bf20-79fe478e6a71',
  //   },
  // });
  return (
    <Form
      layout="horizontal"
      footer={(
        <Button block type="submit" color="primary" size="large">
          提交
        </Button>
        )}
    >
      <Form.Item name="address" label="地址" help="详情地址">
        <ImageUploader
          upload={uploadHandler}
        />
      </Form.Item>

    </Form>

  );
};

export default App;
