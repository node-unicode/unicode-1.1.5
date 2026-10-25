import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H94IAERBOc934JlmGahihE9/qr6s5QFMRH8E44ngmCABzsVDY3cskIIVxMrcWkFrrS27pndZbK/oMlQvHwi7kEcNtQPW17h8+AmGUGKEgqV2VVCyCuI6LC2jhNp5A6ZViwoKtTq9AWrKaOvqlyWp1h0ll8ApkMV1QRyT7kJivyKOC+K2IjpKxxoK5qv1OP0rkPQlGsboJQJXJV++aV0SD7Sjsyftzd/WE3YBpwS/Z6Z4q8ZdtxZGKEBMaZuV1+bNf5rQgtuT/y7/XAxGhNG9S2wbaBEdArcxqO6YwyiWdt6Z+x6Z8FBDST1AC5bO7LTQYT1XETrWorMyZnfNSmhs0LmnsCd99s/Kw/5pz5BYdz6fJg==', 'base64')).toString());
