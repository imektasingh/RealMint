
import "./About.css";
import AboutLogo from "./About_Assets/logo.jpeg";

export default function About() {

  return (
    <section className="about" id="aboutSection">
      <div className="about_container">
        <h2>
            About us
        </h2>
        <div className="about_content">
            <p>
            At RealMint, we believe that authenticity is key, especially when it comes to NFTs (Non-Fungible Tokens). Are you wondering what we mean by 'authentic' NFTs? Let us explain.
            <br /><br />
            As an innovative NFT creator, you need a platform that does not rely on centralized services. A centralized system is a vulnerable one, susceptible to a host of web2 issues. Imagine the link in your NFT's metadata directing to your artwork abruptly breaking, or worse, displaying an error message due to an expired domain name. We're sure you'd agree that it's an unfortunate situation you'd want to avoid.
            <br /><br />
            That's why we assert that if your NFT asset isn't housed in a decentralized storage solution, such as IPFS, it cannot truly claim the title of an NFT. Without this, you lack complete control and your token may end up pointing to an empty space. These kinds of pseudo-NFTs should not exist, but they do. This is often because artists who aren't familiar with technology do not have a straightforward way to mint genuine NFTs.

            </p>
            <p>
            This is where we come in. RealMint is your uncomplicated solution to creating genuinely decentralized and authentic NFTs. Our mission is to empower creators to mint 'RealNFTs' while educating the community to distinguish between genuine and faux NFTs.

                <br /><br />
                If our mission resonates with you, we invite you to spread the word on your social platforms, and encourage your fellow creators to mint with RealMint. Together, we can revolutionize the NFT landscape, promoting only 'RealNFTs' and calling out unreal ones.

                <br /><br />
                Remember, if it isn't minted with RealMint, it might not be a 'RealNFT'!
                <br /><br />
            </p>
            {/* <div className="about_img">
                <img src={AboutLogo} alt=""/>
                <span>RealMint</span>
            </div> */}
        </div>
      </div>
    </section>
  );
}
