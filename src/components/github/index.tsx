import React, { Component } from 'react';
import { IoLogoGithub } from 'react-icons/io5';

// @ts-ignore
import yaml from '@/config/token.yml';

interface IProps {
    url: string
}

interface IState {

}

class Github extends Component<IProps, IState> {
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

    render() {
        const {url} = this.props;
        const {isLoading, loadingTime, description, githubName, imgUrl} = this.state;

        return (
            <div className="rounded-lg border-2 border-gray-100 shadow-lg overflow-hidden">
                <a href={url} target="_blank">
                    <div
                        className="flex w-full h-32 border-1 border-black  transition-shadow text-black">
                        <div className="w-2/3 p-2">
                            <div className="h-8 text-lg text-black">{githubName}</div>
                            <p className="break-all h-10 px-2 mt-0 w-full whitespace-normal overflow-hidden text-sm text-gray-500">{description}</p>
                            <div className="flex text-base text-black">
                                <IoLogoGithub className="mt-1 mr-1"/>
                                <span>{url}</span>
                            </div>
                        </div>
                        <img className="w-1/3 h-full m-0 object-cover object-center" src={imgUrl} alt={githubName}/>
                    </div>
                </a>
            </div>
        );
    }
}

export default Github;