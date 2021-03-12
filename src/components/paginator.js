import React from 'react';


const Paginator = (props) =>{
    const { nextPrevious, nextButton } = props;

    return(
        <div className="mt-4">
            <ul className="flex pl-0 list-none rounded my-2 w-1/4 mx-auto justify-center">
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200 cursor-pointer" onClick={()=>{nextButton(-10, -10)}}><a className="page-link" href="#">Previous</a></li>

                    <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer"  onClick={()=>nextPrevious(0,10)}><a className="page-link">1</a></li>

                    <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer" onClick={()=>nextPrevious(10,20)}><a className="page-link">2</a></li>

                    <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer" onClick={()=>nextPrevious(20,30)}><a className="page-link">3</a></li>

                    <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer" onClick={()=>nextPrevious(30,40)}><a className="page-link">4</a></li>

                    <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer" onClick={()=>nextPrevious(40,50)}><a className="page-link">5</a></li>

                <li className="relative block py-2 px-3 leading-tight bg-white border border-indigo-300 text-blue-700 rounded-r hover:bg-gray-200 cursor-pointer" onClick={()=>{nextButton(10, 10)}}><a className="page-link">Next</a></li>
            </ul>
        </div>)
};

export default Paginator;