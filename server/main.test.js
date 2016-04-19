import { AWS } from 'aws-sdk';

let s3 = new AWS.S3({
  signatureVersion: 'v4'
});
