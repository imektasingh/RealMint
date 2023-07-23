import { Web3Button } from "@web3modal/react";
import "./Header.css";

import { useConnect, useAccount } from "wagmi";
import { useEffect } from "react";

export default function Header() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if ((address !== undefined) === true) {
      const ele = document.getElementById("changeMeToDisconnect2");
      ele.innerHTML = `&nbsp;&nbsp;&nbsp;${address.substring(
        0,
        4
      )} ... ${address.substring(address.length - 4)}`;
    }
  }, [address]);

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_content">
          <h1>EASIEST WAY TO MINT YOUR OWN NFTS</h1>
          <p>Begin Your Truly Decentral NFT Journey Today</p>
          <div className="header_btn">
            <Web3Button />
            {isConnected == false ? <span>Connect Wallet</span> : 
               <div className="header_btn_conainer">
                   <div className="disConnect">Disconnect</div>
                    <span id="changeMeToDisconnect2"></span>
                </div>
                      }
          </div>
        </div>
      </div>
    </header>
  );
}
