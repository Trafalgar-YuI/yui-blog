import React, {Component} from 'react';
import Banner from "../../components/banner";
import Header from "../../components/header";

interface Props {
}

class Home extends Component<Props, object> {
    render() {
        return (
            <>
                <Header/>
                <Banner/>
            </>
        );
    }
}

export default Home;