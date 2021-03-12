import React from 'react';
import avatar from '../avatar.svg';
import { Link } from 'react-router-dom';


const Header = () =>{
    return(<header className="py-1 bg-indigo-600 flex flex-row justify-around text-xl text-gray-50 font-bold mb-8">
        <div className="flex flex-row items-center">
            <Link to="/"><img className="mx-5" src={avatar} width={50} height={50}/></Link>
            <Link to="/">Anime Search</Link>
        </div>
        <div className="flex flex-row items-center">
            <Link className="mx-5 text-base" to="/onpage">On the page</Link>
            <Link className="mx-5 text-base" to="/contactme">Contact me</Link>
        </div>
    </header>)
};

export default Header;