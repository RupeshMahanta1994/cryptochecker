import "./CoinDetail.css"
import CancelIcon from '@mui/icons-material/Cancel';

function CoinDetail({ data, showDetails }) {
    return (data &&
        <div className="CoinContainer">

            <div className="Market">
                <div className="Cross" onClick={() => showDetails(false)}><CancelIcon
                    style={{ color: "rgba(242, 187, 115, 0.8)", fontSize: "2rem", margin: "1em" }} /></div>



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
                            <div className="popUp">
                                Market cap is calculated by multiplying the asset's circulating supply with its current price.

                                <h4>What this means:</h4>
                                A high market cap implies that the asset is highly valued by the market. Currently, the highest market cap asset is Bitcoin.
                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>volume(24H)</h5>
                            <p>{data.volume}</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                The total dollar value of all transactions for this asset over the past 24 hours. We also show the percent change in volume compared to the previous 24 hours.

                                <h4>What this means:</h4>
                                Increases in volume indicate that there has been more trading activity in the past 24 hours.
                            </div>

                        </div>
                        <div className="MarketDetailsItem">
                            <h5>circulating supply</h5>
                            <p>44.6T</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                Circulating supply shows the number of coins or tokens that have been issued so far. We also show the percent of the maximum supply that has already been issued, if applicable.

                                <h4>What this means:</h4>
                                Assets with a low circulating supply but high max supply may see signficant inflation, and vice versa.
                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>typical hold time</h5>
                            <p>44.6T</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                The median time that Coinbase customers hold BTC before selling it or sending it to another account or address.

                                <h4>What this means:</h4>
                                Long hold time signals an accumulation trend. Short hold time indicates increased movement of tokens.
                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>popularity</h5>
                            <p>{data.rank}</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                Popularity is based on the relative market cap of tradable assets on Coinbase.

                                <h4>What this means:</h4>
                                Popular assets have a large market cap, which may imply enthusiasm for the asset. Less popular assets may be relatively undiscovered.
                            </div>
                        </div>

                        <div className="MarketDetailsItem">
                            <h5>price change(1h)</h5>
                            <p>{data.priceChange1h}</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                The percent change in trading volume for this asset compared to 1 hour ago.
                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>price change(24h)</h5>
                            <p>{data.priceChange1d}</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                The percent change in trading volume for this asset compared to 24 hours ago.
                            </div>
                        </div>
                        <div className="MarketDetailsItem">
                            <h5>price change(7d)</h5>
                            <p>{data.priceChange1w}</p>
                            <div className="InfoDiv">!</div>
                            <div className="popUp">
                                The percent change in trading volume for this asset compared to 7 days ago.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinDetail
