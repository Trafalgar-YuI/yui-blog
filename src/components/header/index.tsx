import React, { Component } from 'react';
import Link from 'next/link';
import { RiBuilding2Fill, RiLeafFill, RiCameraLensFill, RiMessage3Fill, RiBlazeFill } from 'react-icons/ri';
import tw from 'tailwind-styled-components';
import PopUpMenu from '@/components/popUpMenu';

interface IProps {

}

interface IState {
    containerActive: Boolean
}

interface IContainerProps {
    $active: Boolean
}

const Container = tw.header<IContainerProps>`
    fixed w-full z-10
    transition-top duration-500 ease-in-out
    ${(props) => props.$active ? 'top-4' : '-top-14'}
`;

const NavBar = tw.nav`
    w-4/5 h-14 mx-auto px-6 rounded-xl text-black bg-white flex justify-between items-center shadow-md
`;

const ChoiceBar = tw.li`
    text-xl px-4 p-1.5 mr-2 rounded-md hover:bg-gray-200 hover:shadow-md
    transition-color duration-200 ease-in-out
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
                    <div className="text-2xl">LOGO</div>
                    <ul className="flex">
                        <ChoiceBar>
                            <Link href="/blogs/[category]/[slug]" as="/blogs/talk/2021-03-12_introduction">
                                <a className="flex justify-center">
                                    <RiBuilding2Fill className="mt-1 mr-1"/>
                                    <span>初</span>
                                </a>
                            </Link>
                        </ChoiceBar>
                        <PopUpMenu>
                            <ChoiceBar>
                                <Link href="/">
                                    <a className="flex justify-center">
                                        <RiLeafFill className="mt-1 mr-1"/>
                                        <span>融</span>
                                    </a>
                                </Link>
                            </ChoiceBar>
                        </PopUpMenu>
                        <ChoiceBar>
                            <Link href="/">
                                <a className="flex justify-center">
                                    <RiCameraLensFill className="mt-1 mr-1"/>
                                    <span>存</span>
                                </a>
                            </Link>
                        </ChoiceBar>
                        <ChoiceBar>
                            <Link href="/">
                                <a className="flex justify-center">
                                    <RiMessage3Fill className="mt-1 mr-1"/>
                                    <span>响</span>
                                </a>
                            </Link>
                        </ChoiceBar>
                        <ChoiceBar>
                            <Link href="/">
                                <a className="flex justify-center">
                                    <RiBlazeFill className="mt-1 mr-1"/>
                                    <span>友</span>
                                </a>
                            </Link>
                        </ChoiceBar>
                    </ul>
                </NavBar>
                <div className="w-20 h-1 bg-white rounded mt-2 mx-auto cursor-pointer" onClick={this.clickActive}/>
            </Container>
        );
    }
}

export default Header;