import AWS from 'aws-sdk';

//Uses AWS bucket access and secret access keys to access Circle's private bucket
AWS.config.update({
    accessKeyId: "AKIAZPS6KVMQRLPVK6EZ",
    secretAccessKey: "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",
    region: 'us-east-2'
    });
let s3 = new AWS.S3();

//Asynchronous function waits fata from AWS before calling other statements
async function getObject () {
    try {
      const params = {
        Bucket: 'cs319-event',
        Key: 'IEEE_1.json' 
      }
  
      const data = await s3.getObject(params).promise();
      console.log(data.Body.toString());
      return JSON.parse(data.Body.toString());
      
    } catch (e) {
      throw new Error(`Could not retrieve file from S3: ${e.message}`)
    }
}

const event = await getObject();
console.log(event);