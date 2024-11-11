module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))