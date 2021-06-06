import type { AppProps } from 'next/app';
import Home from '../layout/home';

const Index: Function = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <Home/>
        </div>
    );
};

export default Index;