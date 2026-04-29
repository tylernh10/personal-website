/** @type {import('next').NextConfig} */

import packageJson from './package.json' with { type: 'json' };

const nextConfig = {
    env: {
        APP_VERSION: packageJson.version,
    },
}

export default nextConfig
