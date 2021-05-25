import React, {Component} from 'react';
import tw from 'tailwind-styled-components';

interface Props {
}

const imageUrl = 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-17-01.png';

const Image = tw.div`
    h-screen w-full bg-no-repeat bg-center
`;

class Index extends Component<Props, object> {
    render() {
        return (
            <>
                <div>
                    <Image style={{backgroundImage: `url(${imageUrl})`}}/>
                </div>
            </>
        );
    }
}

export default Index;