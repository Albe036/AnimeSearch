import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contents = (props) =>{
const { titulo, inicio, final, nextPrevious, cIndice} = props;
const [datos, setDatos] = useState([])

useEffect(async () => {
    nextPrevious(0, 10)
    
    const datas = await axios({
        method: "get",
        url: `https://api.jikan.moe/v3/search/anime?q=${titulo}`
    });
    const datasJson = await datas.data.results;
    setDatos(datasJson);
}, [titulo]);

    const datosCut = datos.slice(inicio, final);

    return(
        <Fragment>
            <div className="w-3/4 mx-auto mt-10 mb-30 grid grid-cols-5 gap-4">
                {datosCut.map((e)=>{
                    return(
                        <div key={e.mal_id} className="p-2 bg-indigo-100 rounded-lg hover:bg-indigo-600 cursor-pointer" onClick={()=>cIndice(e.mal_id)}>
                            <Link to="/card">
                                <img className="rounded-t-lg" src={e.image_url} alt={e.mal_id} width="100%"/>
                                <h1>{e.title}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
};

export default Contents;