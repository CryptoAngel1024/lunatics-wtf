import React, {useState} from "react";
import ConnectButton from "../components/ConnectButton";
import Layout from "../components/Layout";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import MintCard from "../components/MintCard";


function NewMintPage (){
    const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
    const onHover = "hover:drop-shadow-sm";

    const [accounts, setAccounts] = useState([]);


    return (
        <Layout>
            <div className="flex flex-col h-screen relative bg-mint">
                <nav className="w-full flex items-center justify-center py-12">
                    <div className="text-5xl flex space-x-6">
                        <div>
                             <a href="https://twitter.com/lunaticswtf/" target="_blank"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
                         </div>
                         <a href="https://opensea.io/collection/lunaticswtf" target="_blank">
                             <StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  />
                         </a>
                         <Link to="/">
                             <i className={`fa-solid fa-house cursor-pointer ${terraGradient} ${onHover}`} />
                         </Link>
                        </div>
                    </nav>
                <div className="flex flex-col justify-center items-center space-y-6 font-prata text-center">
                    <h1 className="text-4xl lg:text-5xl text-white">Welcome to Kwon Town</h1>
                    <ConnectButton accounts={accounts} setAccounts={setAccounts} />
                    <MintCard accounts={accounts} setAccounts={setAccounts} />
                </div>
            </div>
        </Layout>
    )
}

export default NewMintPage;