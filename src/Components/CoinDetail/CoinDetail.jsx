import "./CoinDetail.css"

function CoinDetail({ data }) {
    return (data &&
        <div className="CoinContainer">

            <div className="Market">
                <div className="IndividualCoin">
                    <img src={data.icon} alt="" />
                    <div className="CoinName">{data.name}</div>
                    <div className="CoinSymbol">{data.symbol}</div>
                </div>
                <div className="MarketHeader">
                    <h1>Market</h1>
                </div>
                <div className="MarketDetails">
                    <h2>Market Stats</h2>
                    <div className="MarketDetailsItems">
                        <div className="MarketDetailsItem">
                            <h5>market cap</h5>
                            <p>{data.marketCap}</p>
                            <div className="InfoDiv">!

                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>volume(24H)</h5>
                            <p>{data.volume}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>circulating supply</h5>
                            <p>44.6T</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>typical hold time</h5>
                            <p>44.6T</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>popularity</h5>
                            <p>{data.rank}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>availabel supply</h5>
                            <p>{data.availableSupply}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>pri e change(1h)</h5>
                            <p>{data.priceChange1h}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>price change(24h)</h5>
                            <p>{data.priceChange1d}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>price change(7d)</h5>
                            <p>{data.priceChange1w}</p>
                            <div className="InfoDiv">!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinDetail
