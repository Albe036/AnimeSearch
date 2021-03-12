import React from 'react';

const Input = (props) =>{

    const { Ctitulo } = props;
    return(
    <div className="flex mx-auto w-1/3">
        <span className="text-lg border border-2 rounded-l px-4 py-3 bg-indigo-600 whitespace-no-wrap text-gray-50">Anime:</span>
        <input onChange={Ctitulo} name="field_name" className="border border-2 rounded-r px-4 py-3 w-full" type="text" placeholder="Write something here..." />
    </div>
    )
}

export default Input;