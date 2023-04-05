import "./MediaCard.css"

export default function MediaCard({ data }) {
    return (data &&
        <div className="Card">
            <img src={data.icon} alt="" />
            <h5>{data.symbol}</h5>
            <h3>{data.name}</h3>
            <span>{data.price.toFixed(4)}</span>

        </div>
    )
}