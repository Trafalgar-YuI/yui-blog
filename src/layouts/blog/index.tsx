import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/src/ast-to-react';
import Code from '@/components/code';
import Github from '@/components/github';

interface IProps {
    content: string
}

interface IState {

}

class Blog extends Component<IProps, IState> {
    render() {
        const {content} = this.props;

        return (
            <div className="flex max-w-screen-full justify-center">
                <div className="flex-none w-12"/>
                <div className="flex-grow prose max-w-screen-md f">
                    <ReactMarkdown components={components} children={content}/>
                </div>
                <div className="flex-none w-12"/>
            </div>
        );
    }
}

const components: Components = {
    code({node, inline, className, children, ...props}) {
        const match: RegExpExecArray | null = /language-(\w+)/.exec(className || '');

        if (match && match[1] === 'github') {
            return <Github url={children && children[0] ? children[0].toString() : ''}/>;
        }

        let tags: string[] = [];
        if (match && className) {
            tags = className.split(':');
        }
        let line: string[] = [];
        if (tags.length > 1) {
            line = tags[1].trim().split(',');
        }

        return !inline && match ? (
            <Code language={match[1]} line={line} code={String(children).replace(/\n$/, '')}/>
        ) : (
            <code className={className} {...props} />
        );
    }
};

export default Blog;