import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';
import { IoChevronBackOutline, IoChevronForwardOutline, IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5';
import tw from 'tailwind-styled-components';

interface IProps {
    showMenuTop: number
}

interface IState {
    showTool: boolean,
    process: string
}

interface IToolProps {
    $active: boolean
}

const Tool = tw.div<IToolProps>`
    hidden sm:block
    w-48 bg-transparent
    fixed xl:right-56 md:right-40 sm:right-20 z-10
    transition-bottom duration-200 ease-in-out
    ${(props) => props.$active ? 'bottom-1' : '-bottom-6'}
`;

class SkipTool extends Component<IProps, IState> {
    validHeight: number = 0;

    state = {
        showTool: false,
        process: '0'
    };

    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll);
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any) {
        const browserHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        const visualHeight = window.innerHeight || document.documentElement.clientHeight;

        this.validHeight = browserHeight - visualHeight;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    bindHandleScroll = (event: any) => {
        const {showTool} = this.state;
        const scrollTop = event.target.documentElement.scrollTop;
        const process = Math.floor(scrollTop * 100 / this.validHeight) + '%';

        const {showMenuTop = 0} = this.props;

        if (scrollTop >= showMenuTop && !showTool) {
            this.setState({showTool: true});
        } else if (scrollTop < showMenuTop && showTool) {
            this.setState({showTool: false});
        }

        this.setState({process});
    };

    render() {
        const {process, showTool} = this.state;

        return (
            <Tool $active={showTool}>
                <ul className="flex text-2xl justify-around">
                    {/* pre article */}
                    <li className="cursor-pointer"><IoChevronBackOutline/></li>
                    {/* to top */}
                    <li className="cursor-pointer"><IoArrowUpOutline onClick={() => animateScroll.scrollToTop()}/></li>
                    {/* to bottom */}
                    <li className="cursor-pointer"><IoArrowDownOutline onClick={() => animateScroll.scrollToBottom()}/>
                    </li>
                    {/* next article */}
                    <li className="cursor-pointer"><IoChevronForwardOutline/></li>
                </ul>
                <div className="h-0.5 bg-blue-500" style={{width: process}}/>
            </Tool>
        );
    }
}

export default SkipTool;