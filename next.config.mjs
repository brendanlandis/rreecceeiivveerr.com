/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.slownames.net',
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'css')],
    },
};

export default nextConfig;
