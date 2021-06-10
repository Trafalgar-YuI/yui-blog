import React, { Component } from 'react';
import tw from 'tailwind-styled-components';

interface IProps {
    isLoading: boolean
}

interface IState {

}

interface IBgProps {
    $active: boolean
}

const Bg = tw.div<IBgProps>`
    absolute z-1 w-full h-full bg-white rounded-lg overflow-hidden
    transition-opacity duration-200 ease-in-out
    ${(props)=> props.$active ? 'opacity-100' : 'opacity-0'}
`;

class Skeleton extends Component<IProps, IState> {
    render() {
        const {children, isLoading} = this.props;

        return (
            <div className="relative">
                <Bg $active={isLoading}>
                    <div className="w-1/2 h-6 mt-4 ml-8 bg-gray-300 rounded-lg"/>
                    <div className="w-4/5 h-4 mt-8 ml-8 bg-gray-200 rounded-lg"/>
                    <div className="w-4/5 h-4 mt-2 ml-8 bg-gray-200 rounded-lg"/>
                    <div className="w-2/5 h-4 mt-2 ml-8 bg-gray-200 rounded-lg"/>
                    <div
                        className="absolute z-2 top-0 left-0 w-full h-full bg-white filter blur-3xl animate-pulse"/>
                </Bg>
                {children}
            </div>
        );
    }
}

export default Skeleton;