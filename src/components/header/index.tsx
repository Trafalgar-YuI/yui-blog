import React, {Component} from 'react';
import Link from 'next/link';

interface Props {

}

class Header extends Component<Props, object> {
    render() {
        return (
            <header className="absolute top-4 w-full">
                <nav className="w-4/5 h-[60px] mx-auto px-6 rounded-full text-white bg-black bg-opacity-70 flex justify-between items-center">
                    <div>LOGO</div>
                    <ul className="flex">
                        <li className="pr-2"><Link href="/"><a>Home</a></Link></li>
                        <li className="px-2"><Link href="/"><a>About</a></Link></li>
                        <li className="px-2"><Link href="/"><a>Services</a></Link></li>
                        <li className="px-2"><Link href="/"><a>Portfolio</a></Link></li>
                        <li className="pl-2"><Link href="/"><a>Blog</a></Link></li>
                    </ul>
                </nav>
                <div className="w-20 h-[4px] bg-black rounded mt-2 mx-auto"/>
            </header>
        );
    }
}

export default Header;