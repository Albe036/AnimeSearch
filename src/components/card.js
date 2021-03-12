import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Card = (props) =>{
    const { titulo, indice } = props;
    const [card, setCard] = useState({});

    useEffect(async () => {        
        const datas = await axios({
            method: "get",
            url: `https://api.jikan.moe/v3/search/anime?q=${titulo}`
        });
        const datasJson = await datas.data.results;
        const info = datasJson.filter(e => e.mal_id === indice);
        setCard(info[0]);
    }, []);

    return(
    <div>
        <h1 className="text-3xl text-center">{card.title}</h1>
        <div className="flex flex-row bg-indigo-300 mx-48 p-4">
            <img src={card.image_url}/>
            <div className="mx-8">
                    <p className="">{card.mal_id}</p>
                    <p className="">{card.url}</p>
                    <p className="">{card.episodes}</p>
                    <p className="">{card.synopsis}</p>
                    <p className="">{card.type}</p>
                    <p className="">{card.score}</p>
                    <p className="">{card.start_date}</p>
                    <p className="">{card.end_date}</p>
                    <p className="">{card.members}</p>
                    <p className="">{card.membersrated}</p>
            </div>
        </div>
    </div>)
};

export default Card;