import { gql } from '@apollo/client';

export const GET_UPLOAD_OSS = gql`
    query createOSSObject{

        createOSSObject{
            expire
            policy
            signature
            accessid
            dir
            host
        }
    }
`;
