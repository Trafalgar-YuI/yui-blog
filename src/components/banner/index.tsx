import React, { Component, MutableRefObject } from 'react';
import tw from 'tailwind-styled-components';
import Typed from 'typed.js';
import { AiFillGithub, AiFillWechat, AiFillQqCircle } from 'react-icons/ai';

// @ts-ignore
import yaml from '../../../config/common.yml';
import Tooltip from '../tooltip';

interface IProps {

}

interface IState {
    bannerImages: Array<String>,
    carousel: Number
}

interface IPositionProps {
    $active: Boolean
}

const Image = tw.div`
    absolute
    h-screen w-full bg-center
    transition-transform duration-500 delay-200 ease-in-out;
`;

const Position = tw.li<IPositionProps>`
    mx-2 h-3 rounded-full cursor-pointer
    transition-all duration-500 delay-200 ease-in-out;
    ${(props) => props.$active ? 'w-8 bg-white' : 'w-3 bg-gray-300'}
`;

const intervalTime = 3000;

class Banner extends Component<IProps, IState> {
    cycleInterval: NodeJS.Timeout | undefined;
    type: Typed | undefined;
    el: HTMLSpanElement | null | undefined;

    state = {
        bannerImages: [],
        carousel: 0
    };

    componentDidMount() {
        this.setState({bannerImages: yaml.banner});
        this.cycleInterval = setInterval(this.getCycleInterval, intervalTime);

        // @ts-ignore
        this.type = new Typed(this.el, {
            strings: ['Black Tea', 'Red Double Bus'],
            typeSpeed: 50,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }

    componentWillUnmount() {
        if (this.cycleInterval != undefined) {
            clearInterval(this.cycleInterval);
        }
        if (this.type) {
            this.type.destroy();
        }
    }

    getCycleInterval = () => {
        let {carousel, bannerImages} = this.state;
        carousel = (carousel + 1) % bannerImages.length;
        this.setState({carousel});
    };

    positionClick = (position: Number) => {
        this.setState({carousel: position});

        // 点击切换轮播图后，重置定时任务
        if (this.cycleInterval != undefined) {
            clearInterval(this.cycleInterval);
            this.cycleInterval = setInterval(this.getCycleInterval, intervalTime);
        }
    };

    render() {
        const {bannerImages, carousel} = this.state;

        return (
            <div className="relative">
                {/* 轮播图 */}
                <div className="relative overflow-hidden h-screen w-full">
                    {
                        bannerImages ? (bannerImages.map((image, index) => {
                                return <Image key={index}
                                              style={{
                                                  backgroundImage: `url(${image})`,
                                                  left: `${index * 100}%`,
                                                  transform: `translateX(-${carousel * 100}%)`
                                              }}/>;
                            }))
                            : ''
                    }
                </div>
                {/* 文字 */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                    {/* 标题 */}
                    <span className="text-white text-8xl">YuI HessTina</span>
                    <div className="h-0.5 w-full mt-4 bg-white"/>
                    {/* 描述文字 */}
                    <div className="text-white text-4xl mt-4">
                        <span ref={(el) => {
                            this.el = el;
                        }}/>
                    </div>
                    {/* 图标 */}
                    <div className="mt-4 w-full flex justify-center text-3xl text-white">
                        <Tooltip title="Github">
                            <AiFillGithub className="mx-4 hover:text-blue-400"/>
                        </Tooltip>
                        <Tooltip title="Wechat">
                            <AiFillWechat className="mx-4 hover:text-blue-400"/>
                        </Tooltip>
                        <Tooltip title="QQ">
                            <AiFillQqCircle className="mx-4 hover:text-blue-400"/>
                        </Tooltip>
                    </div>
                </div>
                {/* 轮播图点控制 */}
                <div className="absolute bottom-4 w-full">
                    <ul className="flex justify-center">
                        {
                            bannerImages ? (bannerImages.map((image, index) => {
                                    return <Position key={index} $active={carousel == index}
                                                     onClick={() => this.positionClick(index)}/>;
                                }))
                                : ''
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Banner;