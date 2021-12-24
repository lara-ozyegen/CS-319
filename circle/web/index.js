const AWS = require('aws-sdk');
var text;
// Our default route

    AWS.config.update({
        accessKeyId: "AKIAZPS6KVMQRLPVK6EZ",
        secretAccessKey: "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",
        region: 'us-east-2'
      });
    let s3 = new AWS.S3();

    var params = {
        Bucket: 'cs319-event',
        Key: 'IEEE_1.json'
    }
    s3.getObject(params, function(err,data){
        if (err) console.log(err, err.stack);
        else{    
            console.log(JSON.parse(data.Body.toString()));
            text = JSON.parse(data.Body.toString());
        }
    });
    //export default text;
