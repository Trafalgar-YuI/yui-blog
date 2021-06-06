import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import tw from 'tailwind-styled-components';

interface IProps {

}

interface IState {
    showMenu: Boolean
}

const SubMenuButton = tw.li`
    py-2 text-center hover:bg-gray-200 hover:rounded-md cursor-pointer
    transition-color duration-200 ease-in-out
`;

class PopUpMenu extends React.Component<IProps, IState> {
    state = {
        showMenu: false
    };

    handleMouseEnter = () => {
        this.setState({showMenu: true});
    };

    handleMouseLeave = () => {
        this.setState({showMenu: false});
    };

    render() {
        const {children} = this.props;
        const {showMenu} = this.state;

        return (
            <div className="relative" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div>
                    {children}
                </div>
                <Transition
                    show={showMenu}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <div className="absolute left-1/2 top-10 transform -translate-x-1/2">
                        <div className="w-full h-4 bg-transparent"/>
                        <ul className="w-40 py-1 px-2 bg-white rounded-md shadow-md">
                            <SubMenuButton>手记</SubMenuButton>
                            <SubMenuButton>手记</SubMenuButton>
                            <SubMenuButton>手记</SubMenuButton>
                            <SubMenuButton>手记</SubMenuButton>
                            <SubMenuButton>手记</SubMenuButton>
                        </ul>
                    </div>
                </Transition>
            </div>
        );
    }
}

export default PopUpMenu;