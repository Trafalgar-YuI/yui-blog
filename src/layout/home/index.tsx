import React, { Component } from 'react';
import Banner from '../../components/banner';
import Header from '../../components/header';
import SkipTool from '../../components/skipTool';

interface IProps {
}

interface IState {
}

class Home extends Component<IProps, IState> {
    render() {
        return (
            <>
                <Header/>
                <Banner/>
                <div style={{height: '100vh'}}>
                </div>
                <SkipTool showMenuTop={100}/>
            </>
        );
    }
}

export default Home;