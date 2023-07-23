import { Web3Button } from "@web3modal/react";
import "./WalletConnect.css";
import Logo from "./logo.png";

import { useConnect, useAccount } from "wagmi";
import { useEffect, useState } from "react";

function WalletConnect() {

    const { address, isConnected } = useAccount();
    const [openH,setOpenH] = useState(true);

    useEffect(() => {
        if ((address !== undefined) === true) {
          const ele = document.getElementById("changeMeToDisconnect");
          ele.innerHTML = `&nbsp;&nbsp;&nbsp;${address.substring(
            0,
            4
          )} ... ${address.substring(address.length - 4)}`;
        }
      }, [address]);

  return (
    <>
      <nav className="nav">
        <div className="nav_container">
          <div className="nav_logo">
            <a href="/">
              <img src={Logo} alt="" />
              <span>
            RealMint
            </span>
            </a>

          </div>

          <div className={`nav_right ${openH ? '' : 'showHamburger'}`}>
              <ul>
                  <li>
                      <a href="#aboutSection">About</a>
                  </li>
                  <li>
                      <a href="#mintSection">Mint</a>
                  </li>
                  <li>
                      <a href="#mintedSection">Minted NFTs</a>
                  </li>
              </ul>
            <div className="nav_btn">
              <Web3Button />
              {isConnected == false ? <span>Connect Wallet</span> : 
                <div className="nav_btn_conainer">
                    <div className="disConnect">Disconnect</div>
                    <span id="changeMeToDisconnect"></span>
                </div>}
            </div>
          </div>

          <div className="nav_hamburger" onClick={()=> setOpenH(!openH)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </nav>
    </>
  );
}

export default WalletConnect;
