import React from "react";


const ConnectButton = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);
    // const isConnected = true;

    async function connectAccount(){
        if (window.ethereum){
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccounts(accounts);
            } catch (error) {

            }
            // window.ethereum.enable();
        }
    }

    return (
        <div>
            {isConnected ?
                <div className="px-4 py-2 btn-gradient-border rounded-lg text-white">
                    Connected!
                </div> :
                <button className="px-4 py-2 btn-gradient-border rounded-lg text-white hover:drop-shadow-xl" onClick={connectAccount}>Connect</button>
            }
        </div>
    )
}

export default ConnectButton;