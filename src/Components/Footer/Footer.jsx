import "./Footer.css"
import { Twitter, Facebook, Instagram, LinkedIn, YouTube, GitHub, Telegram } from '@mui/icons-material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterDetails flex-row ">
                <div className="Logo">
                    <CurrencyExchangeIcon />
                    <span>cryptoChecker</span>
                </div>
                <div className="Company flex-column">
                    <h4>Company</h4>
                    <span>About</span>
                </div>
                <div className="Resources flex-column">
                    <h4>Resources</h4>
                    <span>Site Widgets</span>
                    <span>Telegram Bot</span>
                    <span>Market Data API</span>
                </div>
                <div className="Support flex-column">
                    <h4>Support</h4>
                    <span>Help Center</span>
                    <span>Change Request From</span>
                </div>
            </div>

            <div className="FooterSocialIcons">
                <Twitter />
                <Facebook />
                <Instagram />
                <LinkedIn />
                <YouTube />
                <GitHub />
                <Telegram />

            </div>
        </div>
    )
}

export default Footer
