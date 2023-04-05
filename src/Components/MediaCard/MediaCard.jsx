import { useState } from "react"
import "./MediaCard.css"
import CoinDetail from "../CoinDetail/CoinDetail"

export default function MediaCard({ data, ClickHandle, showDetails }) {

    return (data &&
        <>
            <div className="Card" onClick={() => ClickHandle(data.rank)
            } >
                <img src={data.icon} alt="" />
                <h5>{data.symbol}</h5>
                <h3>{data.name}</h3>
                <span>{data.price.toFixed(4)}</span>
                <button onClick={() => showDetails(true)}>Show More</button>

            </div>

        </>
    )
}