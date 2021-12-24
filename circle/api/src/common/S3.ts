import * as S3 from 'aws-sdk/clients/s3';

const aws = require('aws-sdk');
const s3Client = new S3();
aws.config.update({
    accessKeyId: 'AKIAZPS6KVMQRLPVK6EZ',
    secretAccessKey: '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',
    region: 'us-east-2'
});

export class Storage {
  public static async get(fileName, bucket) {
    const params = {
      Bucket: bucket,
      Key: fileName,
    };

    return s3Client.getObject(params).promise();
  }  

//   public static async listObjects(prefix, bucket) {
//     const params = {
//       Bucket: bucket,
//       Prefix: prefix,
//     };

//     return s3Client.listObjectsV2(params).promise();
//   }
}
