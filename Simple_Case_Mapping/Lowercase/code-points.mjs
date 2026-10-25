import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5EJQES//KusDq4zmXzo4Ap6u0f48JfTd3PZXYFMoU3QpoD2FjqBX7SpwLIw91ijsgLMwmXzqq6ZB5+mQWx4e0840KMe8uWXlR7fCTSIGSGMKISJ1sHhx6Cj89F1nTcEwwa7GoyZMfWhcF5R3Ek8E37A2Nm9h9sbnqtg2P8TxQhU/YIY7EMEVRd8Ym8IkcvnZ9fD4HIlLaUteFiuxFvWTSnfmJh2Z2VneKNQYvi0DnRK50Fp1s1AIYSYeJ3psyt7P437wxkx+63G5drw3+V3q4NSzO9dlNQMPWIYhitPx5L3YN6QEM7bg/0DkWHgRzbvYA7/4HAwR+8QcWvlN/YcUsxxWJDtFNbgEcOMn/276sKqpFdorofHbxo=', 'base64')).toString());
