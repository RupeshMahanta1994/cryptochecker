import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./HomePage.css"
import MediaCard from "../MediaCard/MediaCard";
import CoinDetail from "../CoinDetail/CoinDetail";

function HomePage() {
    const [coinList, setCoinList] = useState([]);

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=5").then(
            (response) => {
                setCoinList(response.data.coins);
            }
        );
    }, []);


    return (

        <>
            <div className="CardContainer">
                {coinList.map((item) => {
                    return (
                        <MediaCard data={item} />
                    )
                })}
                {console.log(coinList[0])}
            </div>
            <div>
                <CoinDetail data={coinList[0]} />
            </div>
        </>

    )
}

export default HomePage
