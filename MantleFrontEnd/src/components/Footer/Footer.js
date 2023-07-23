import Logo from "./Footer_Assets/logo.png";
import gitHub from "./Footer_Assets/github.svg";
import twitter from "./Footer_Assets/twitter.svg";
import disc from "./Footer_Assets/disc.svg";
import mantleLogo from "./Footer_Assets/mantle_logo.png";
import "./Footer.css";


export default function Footer() {

  return (
    <footer className="footer">
        <div className="footer_animation"></div>
      <div className="footer_container">
          <div className="footer_left">
            <div className="footer_logo">
                <img src={Logo} alt=""/>
            </div>
            <p>
            Only truly decentral NFTs that won't disappear because someone did not pay for webhosting
            </p>
            <p style={{marginBottom: '0'}}>
            © RealMint 2023
            </p>
          </div>
          <div className="footer_right">
            <div className="footer_list">
                <ul>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                </ul>
            </div>

            <div className="footer_social">
                <p>Join our Community</p>
                <div className="footer_social_content">
                    <div className="footer_social_item">
                        <a href="">
                            <img src={gitHub} alt=""/>
                        </a>
                    </div>
                    <div className="footer_social_item">
                        <a href="">
                            <img src={twitter} alt=""/>
                        </a>
                    </div>
                    <div className="footer_social_item">
                        <a href="">
                            <img src={disc} alt=""/>
                        </a>
                    </div>
                </div>
                <p className="powered">Powered by <img src={mantleLogo} alt=""/> Mantle</p>
            </div>

          </div>
      </div>
    </footer>
  );
}
