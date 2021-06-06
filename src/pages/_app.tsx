import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tailwind.css';

import packageJson from '../../package.json';

console.info(`%cYuI HessTina v${packageJson.version}%c https://yui-blog.vercel.app/ `,
             'background: #40a9ff; color: #fff; padding: 5px;',
             'color: #40a9ff; padding: 4px; border: 1px solid #40a9ff;');

const MyApp: Function = ({Component, pageProps}: AppProps) => {
    return <>
        <Component {...pageProps} />
    </>;
};

export default MyApp;
