import { useQuery } from '@apollo/client';
import { GET_UPLOAD_OSS } from '../graphql/oss';

export const useUploadOSS = () => {
  const { data: d } = useQuery(GET_UPLOAD_OSS);
  const uploadHandler = async (file: File) => {
    const formData = new FormData();
    const data = d.createOSSObject;
    const key = `images/${file.name}`;
    formData.append('key', key);
    formData.append('OSSAccessKeyId', data.accessid);
    formData.append('policy', data.policy);
    formData.append('Signature', data.signature);
    formData.append('file', file);
    formData.append('success_action_status', '200');
    const res = await fetch(data.host, {
      method: 'POST',
      body: formData,
    });
    console.log('res:::', res);
    return { url: res.url + key };
  };
  return uploadHandler;
};
