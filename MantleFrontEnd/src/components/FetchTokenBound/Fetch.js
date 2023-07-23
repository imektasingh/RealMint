import "./Fetch.css";
import { abi } from './abi';
import { create } from 'ipfs-http-client';
import { useEffect, useState } from "react";
import { useConnect, useAccount } from 'wagmi';
import { getPublicClient } from '@wagmi/core';
import { NFTStorage } from 'nft.storage';
import axios from 'axios';
import { prepareSendTransaction, sendTransaction } from '@wagmi/core';
import { parseEther } from 'viem';
import { writeContract } from '@wagmi/core';
import { useContractReads } from 'wagmi';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { ethers } from 'ethers';

import upIcon from "./upIcon.svg"

function Fetch () {
    
    const Contract_Address = "0x97398fc9f7EA6C6bE4D14ded75e196eF763E205d";
    const mint_address = "0x7199D548f1B30EA083Fe668202fd5E621241CC89";
    const { connect, connectors, error, isLoading, pendingConnector, provider } = useConnect()
    const { address, isConnected } = useAccount();

    const [myArray, updateMyArray] = useState([]);

    

    const projectId = '2SHg9nYGwUEpcXJuBTdkDcT2tYV';
    const projectSecret = '6834cfa182ec09eeff6577aca368802e';
    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
        authorization: auth,
    }
    });

    const [fileUrl, updateFileUrl] = useState('');
    const [imageUrl, setImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);

    async function onChange(e) {
        let metadatax;

        try
        {
            setUploading(true);
            const file = e.target.files[0];
            const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVGYzA0NTUyMzI5ODA5NDI4NDkzY0VDYjdmZkY4RkUxNGY5YkQzOTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTk2NjA0NzY5NiwibmFtZSI6IlBhcmlzIn0.9CxIio0ygPmcf8onnQcFrZurTQACHiB8qOgO6tcHEWs"; 
            const client1 = new NFTStorage({ token: apiKey });
            const metadata = await client1.store({
                name: "My NFT Image",
                description: "Description of the image",
                image: file,
            });
            setImageUrl(metadata.url);
            updateFileUrl(metadata.url);
            metadatax = metadata.url;

            console.log("IPFS LINK: ", metadata.url);
            setUploading(false);
            
        }
        catch(e){
            console.log("ERROR UPLOADING FILES TO IPFS");
            setUploading(false);
        }
        

        /*
        const file = e.target.files[0];
        let url;
        try {
            const added = await client.add(file)
            url = `https://scrollbarcelona.infura-ipfs.io/ipfs/${added.path}`
            updateFileUrl(url)
        } 
        catch (error) {
            console.log('Error uploading file: ', error)
        } 
        //console.log("URL", fileUrl);
        */

        mint(metadatax); 
    }


    async function mint(metadatax) {
        console.log("imageUrl: ", metadatax);
        const { hash } = await writeContract({
            address: Contract_Address,
            abi: abi,
            functionName: 'safeMint',
            args: [address, String(metadatax)],
        });

        console.log("Transaction Hash is: ", hash);
    }


    async function Photogallery () 
    {
        updateMyArray([]);
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log(provider);
        const contract = new ethers.Contract( Contract_Address , abi , provider );
    

        try
        {
            for(let i=0; i<100; i++){
                let x = await contract.tokenURI(i);
                console.log(x);
                
               
                try
                {
                    const cid = x.replace('ipfs://', '');
                    console.log("CID: ", cid)
                    const response = await axios.get(`https://ipfs.io/ipfs/${cid}`);
                    console.log("ipfsJSONData: ", response.data.image.replace(/\s+/g, '%'));
                    const cidss = response.data.image.replace(/\s+/g, '%').replace('ipfs://', '%').slice(1);
                    console.log("cisdd: ",cidss);
                  //  const ipfsJSONData = JSON.parse(response.data.image);
                    const temp = `https://ipfs.io/ipfs/${cidss}`;
                    console.log("temp: ",temp);
                    updateMyArray( arr => [...arr, temp]);
                    

                }
                catch(e){

                }
                
                

                if(x!==""){
                 updateMyArray( arr => [...arr, x]);
                }
                 
             }
        }
        catch(e){
            console.log("no more nft");
        }

        
        console.log(myArray);

    }

    return(
        <>


            {isConnected==false? <h2 className="h2center">
            Connect wallet and Mint NFT on Mantle
            </h2>
            :
            <>
                
                <div className="App" id="mintedSection">
                <h2 className="h2cen">Upload the NFT on IPFS to mint</h2>
      
                <div className="upConainer">
                <label className="upLabel" htmlFor="uplaod">
                    <img src={upIcon} alt="" />
                    Upload Nft
                </label>
                <input id="uplaod" className="fileup"
                    type="file"
                    onChange={onChange}
                />
                </div>
                <div></div>
                <div></div>
                {/*
                    fileUrl && (
                    <img className="upImage" src={fileUrl} /> 
                    )
                    */
                }
                <p className="fileUrl">{fileUrl}</p>
                <button className="mintbutton" onClick={mint}>Mint</button>
                </div>
            </>
            }
            
            <section className="mybuttons egp">
                <div className="egp_container">
                    <h2 className="egp_title"> ETH Global Paris </h2>
                    <button className="btn egp_btn" onClick={Photogallery}>Show Minted NFTs</button>
                </div>
            </section>

            <div className='nfts_container'>
            { 
                myArray.map((temp) => {
                    return  <div className='sold' key={`${temp}`} >
                        
                        <img className="minted" src={`${temp}`} width="250px" height="250px" alt={`${temp}`} /> 
                </div>    
            }) 
            }
        </div>

        </>
    );
}

export default Fetch;