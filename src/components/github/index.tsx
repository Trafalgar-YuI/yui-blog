import React, { Component } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import Skeleton from '@/components/skeleton';

// @ts-ignore
import yaml from '@/config/token.yml';

interface IProps {
    url: string
}

interface IState {
    isLoading: boolean,
    loadingTime: number,
    description: string,
    imgUrl: string,
    githubName: string
}

const LOAD_TIME_MILLISECOND = 2000;

class Github extends Component<IProps, IState> {
    timeoutId: NodeJS.Timeout | undefined;

    state = {
        isLoading: true,
        loadingTime: 0,
        description: '',
        imgUrl: '',
        githubName: ''
    };

    componentDidMount() {
        const {url} = this.props;
        const path = url.replace('https://github.com/', '');

        const header = new Headers();
        header.append('Accept', 'application/vnd.github.inertia-preview+json');
        if (yaml.github) {
            header.append('Authorization', `token ${yaml.github}`);
        }

        this.timeoutId = setTimeout(() => {
            this.setState({loadingTime: LOAD_TIME_MILLISECOND});
        }, LOAD_TIME_MILLISECOND);

        fetch(`https://api.github.com/repos/${path}`,
              {
                  method: 'GET',
                  headers: header,
                  cache: 'force-cache'
              })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${path} 请求失败`);
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                                  isLoading: false,
                                  description: data.description,
                                  imgUrl: data.owner.avatar_url,
                                  githubName: data.full_name
                              });
            })
            .catch((error) => console.error(error));
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const {url} = this.props;
        const {isLoading, loadingTime, description, githubName, imgUrl} = this.state;

        return (
            <Skeleton isLoading={isLoading || loadingTime < LOAD_TIME_MILLISECOND}>
                <a className="block w-full h-40 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 ease-in-out"
                   href={url} target="_blank">
                    <div className="flex w-full h-full text-black">
                        <div className="w-2/3 h-full p-2 pt-3">
                            <div className="h-1/4 m-1 ml-2 text-lg text-black">{githubName}</div>
                            <p className="break-all h-1/2 m-0 -mt-2 p-2 w-full whitespace-normal overflow-hidden text-sm text-gray-500">
                                {description}
                            </p>
                            <div className="h-1/4 mt-1 flex text-base text-black">
                                <IoLogoGithub className="mt-1 mx-2"/>
                                <span>{url}</span>
                            </div>
                        </div>
                        <img className="w-1/3 h-full m-0 object-cover object-center" src={imgUrl} alt={githubName}/>
                    </div>
                </a>
            </Skeleton>
        );
    }
}

export default Github;