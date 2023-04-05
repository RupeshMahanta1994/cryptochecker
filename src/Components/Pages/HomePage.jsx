import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./HomePage.css"
import MediaCard from "../MediaCard/MediaCard";
import CoinDetail from "../CoinDetail/CoinDetail";
import SearchIcon from '@mui/icons-material/Search';
import { FilterList } from "@mui/icons-material";

function HomePage() {
    const [coinList, setCoinList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=50").then(
            (response) => {
                setCoinList(response.data.coins);
            }
        );
    }, [filteredList]);
    const filterBySearch = (event) => {
        const query = event.target.value;
        let updatedList = [];
        updatedList = coinList.filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        })

        setFilteredList(updatedList)
    }
    { console.warn(`i am filterd list${filteredList}`) }


    return (

        <>
            <div className="CardContainer">
                <div className="SearchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search For an Asset" onChange={filterBySearch} />
                </div>
                {filteredList.map((item) => {
                    return (
                        <MediaCard data={item} />
                    )
                })}
                {console.log(coinList[0])}
                <CoinDetail data={coinList[0]} />


            </div>

        </>

    )
}

export default HomePage
