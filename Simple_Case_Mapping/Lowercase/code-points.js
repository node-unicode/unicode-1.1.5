module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))