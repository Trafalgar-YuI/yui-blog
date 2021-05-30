import type {AppProps} from 'next/app';
import '../../styles/globals.css';
import '../../styles/tailwind.css';

const MyApp: Function = ({Component, pageProps}: AppProps) => {
    return <>
        <Component {...pageProps} />
    </>;
};

export default MyApp;
