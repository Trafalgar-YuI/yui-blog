import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import tw from 'tailwind-styled-components';

interface IProps {
    title?: string;
}

interface IState {
    showMenu: Boolean
}

class Tooltip extends React.Component<IProps, IState> {

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
        const {children, title} = this.props;
        const {showMenu} = this.state;

        return (
            <div className="relative">
                <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    {children}
                </div>
                {title ? (<Transition
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
                            <div
                                className="w-4 overflow-hidden inline-block absolute left-1/2 -top-2 transform -translate-x-1/2">
                                <div className="h-3 w-3 bg-black bg-opacity-80 rotate-45 transform origin-bottom-left"/>
                            </div>
                            <div className="bg-black bg-opacity-80 text-sm py-2 px-3 rounded-lg mt-1">
                                {title}
                            </div>
                        </div>
                    </Transition>)
                    : <></>
                }
            </div>
        );
    }
}

export default Tooltip;