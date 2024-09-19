// next.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
    // output: 'export',
};

export default nextConfig;
