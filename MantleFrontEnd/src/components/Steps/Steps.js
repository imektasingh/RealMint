
import "./Steps.css";


export default function Steps() {

  return (
    <section className="steps" id="mintSection">
      <div className="steps_container">
        <h2>
        3 easy steps
        </h2>
        <div className="steps_grid">
            <div className="card">
                <h4>
                    1
                </h4>
                <p>
                ConnectWallet
                </p>
            </div>
            <div className="card">
                <h4>
                    2
                </h4>
                <p>
                Create
                </p>
            </div>
            <div className="card">
                <h4>
                    3
                </h4>
                <p>
                Upload to IPFS & Mint
                </p>
            </div>
            {/* <div className="card">
                <h4>
                    4
                </h4>
                <p>
                Mint!
                </p>
            </div> */}
        </div>
      </div>
    </section>
  );
}
