module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))