'use strict';

exports.handler = (event, context, callback) => {
     const request = event.Records[0].cf.request;
     console.log(JSON.stringify(event))
     
  if (request.headers['cloudfront-viewer-country']) {
         const countryCode = request.headers['cloudfront-viewer-country'][0].value;
        //  if (countryCode === 'UK' || countryCode === 'DE' || countryCode === 'IE' ) {
        if (countryCode === 'CN' ) {
             const domainName = 'd9dc2widzh.execute-api.cn-north-1.amazonaws.com.cn';
             request.origin.custom.domainName = domainName;
             request.headers['host'] = [{key: 'host', value: domainName}];
         }
     }
     
    callback(null, request);
};