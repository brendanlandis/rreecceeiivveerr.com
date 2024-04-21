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
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [{ type: 'header', key: 'host', value: 'www.rreecceeiivveerr.com' }],
                destination: 'https://rreecceeiivveerr.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
