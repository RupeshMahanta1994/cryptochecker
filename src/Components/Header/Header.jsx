import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function Header() {
    return (
        <div className="Header">
            <div className="Logo">
                <CurrencyExchangeIcon />
                <span>cryptoChecker</span>
            </div>
            <div className="SearchBar">
                <SearchIcon />
                <input type="text" placeholder="Search For an Asset" />
            </div>
        </div>
    )
}

export default Header
