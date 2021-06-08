import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IoCopyOutline, IoExpandOutline } from 'react-icons/io5';

interface IProps {
    language: string | undefined,
    line: string[] | undefined,
    code: string | undefined
}

interface IState {

}

class Code extends Component<IProps, IState> {
    render() {
        const {language, line, code} = this.props;

        return (
            <figure className="rounded-xl" style={{backgroundColor: '#21252b'}}>
                <figcaption className="flex justify-center pt-2">
                    <div className="flex-none w-12"/>
                    {language ?
                        <div className="flex-grow flex justify-center text-xl text-white">{language}</div>
                        : <></>
                    }
                    <div className="flex-none flex justify-center mr-3">
                        <IoCopyOutline className="text-white text-2xl mr-1"/>
                        <IoExpandOutline className="text-white text-2xl"/>
                    </div>
                </figcaption>
                <SyntaxHighlighter customStyle={preStyle} codeTagProps={codeStyle}
                                   style={vscDarkPlus} language={language ? language : ''}
                                   children={code} wrapLines={true} showLineNumbers
                                   lineProps={lineNumber => {
                                       let style = {display: 'block'};
                                       if (line && line.includes(lineNumber + '')) {
                                           // @ts-ignore
                                           style.backgroundColor = '#353b45';
                                           // @ts-ignore
                                           style.borderLeft = '0.25rem solid #40a9ff';
                                           // @ts-ignore
                                           style.marginLeft = '-0.25rem';
                                       }
                                       return {style};
                                   }}/>
            </figure>
        );
    }

}

const preStyle = {
    background: 'transparent',
    fontSize: '1rem',
    padding: '0 .725rem .5rem'
};

const codeStyle = {};

export default Code;