import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H/UIAEQhORunSmMuTUEdCj6h6O9V9/f7TfxH9EUwHtFSQTpIJh7qVBpIAhQQC3NiAY19TLFzccvH7ywsjyr3gbBredXQPGBzrduHP8EQVUeUi2pfZZg1Jh6T6jZVmpdtmG4tdcozdXSviKKiNc/bLjebmstjwqVxDWTtyprRHiCN6pqVdajLMbw0KRc+rMf1v47CX9LOJu5xuAb92kPrklTUdnYBKUf9VnXg2dfWR4R/6Xc9uQjsmlIuwZ/YUbxT4zmxFkYXvVHVHdcfIaL604Qu3In8d/kvJmEEps8uKdlGl/QN3HpcvXyOaVtYsrPrh2TDOwnV5Iw0WDu/1/KEs7kpoW8t+ltzjvesivYe/VcWJ9Jn/9l62H/aO6R3/Z9PEw==', 'base64')).toString());
