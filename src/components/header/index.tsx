import React, {Component} from 'react';
import Link from 'next/link';
import tw from "tailwind-styled-components";

interface IProps {

}

interface IState {
    containerActive: Boolean
}

interface ContainerProps {
    $active: Boolean
}

const Container = tw.header<ContainerProps>`
    absolute w-full
    transition-all ease-in-out duration-500
    ${(p) => p.$active ? 'top-4' : '-top-14'}
`;

const NavBar = tw.nav`
    w-4/5 h-14 mx-auto px-6 rounded-xl text-black bg-white bg-opacity-70 flex justify-between items-center
`;

class Header extends Component<IProps, IState> {

    state = {
        containerActive: true
    };

    clickActive = () => {
        const {containerActive} = this.state;
        this.setState({containerActive: !containerActive});
    };

    render() {
        const {containerActive} = this.state;

        return (
            <Container $active={containerActive}>
                <NavBar>
                    <div>LOGO</div>
                    <ul className="flex">
                        <li className="pr-2"><Link href="/"><a>Home</a></Link></li>
                        <li className="px-2"><Link href="/"><a>About</a></Link></li>
                        <li className="px-2"><Link href="/"><a>Services</a></Link></li>
                        <li className="px-2"><Link href="/"><a>Portfolio</a></Link></li>
                        <li className="pl-2"><Link href="/"><a>Blog</a></Link></li>
                    </ul>
                </NavBar>
                <div className="w-20 h-1 bg-white rounded mt-2 mx-auto cursor-pointer" onClick={this.clickActive}/>
            </Container>
        );
    }
}

export default Header;