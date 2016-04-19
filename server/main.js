import { Meteor } from 'meteor/meteor';

import { AWS } from 'aws-sdk';

let s3 = new AWS.S3({
  signatureVersion: 'v4'
});

Meteor.startup(() => {
  // code to run on server at startup
});
