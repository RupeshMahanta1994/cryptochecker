import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./HomePage.css"
import MediaCard from "../MediaCard/MediaCard";
import CoinDetail from "../CoinDetail/CoinDetail";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function HomePage() {
    const [coinList, setCoinList] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [activCoin, setActiveCoin] = useState(null);
    const [showActiveCoin, setShowActiveCoin] = useState(false)

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=52").then(
            (response) => {
                setCoinList(response.data.coins);
            }
        );
    }, []);

    const ClickHandle = (e) => setActiveCoin(e)
    const showDetails = (e) => setShowActiveCoin(e)
    const onChangeHandler = (e) => setUserInput(e)

    return (

        <>
            <Header onChangeHandler={onChangeHandler} />
            <div className="CardContainer">

                {coinList.filter((item) => {
                    return item.name.toLowerCase().includes(userInput.toLowerCase());
                })
                    .map((item) => {
                        return (
                            <MediaCard data={item} ClickHandle={ClickHandle} showDetails={showDetails} />
                        )
                    })}

                <div className="showCoinDeatails">
                    {showActiveCoin ? <CoinDetail data={coinList[activCoin - 1]} showDetails={showDetails} /> : ""}
                </div>


            </div>
            <Footer />

        </>

    )
}

export default HomePage
