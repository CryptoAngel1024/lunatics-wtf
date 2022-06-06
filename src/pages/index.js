import React, {useState, useEffect} from "react"
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import MusicPlayer from "../components/MusicPlayer";
import {Link} from "gatsby";
import {ethers, utils} from "ethers";

function IndexPage (){
    const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
    const onHover = "hover:drop-shadow-sm";

    // Web3 fetch data
    const [tSupply, setTsupply] = useState(0);

    let provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/d022654b0a33493ca23ccffc7ce1eebc");
    const nftContract = new ethers.Contract(
        '0xBe3CE5b42d581f085E08f267B28db520a3a6635A',
        [
            `function totalSupply() public view returns(uint256) `,
        ],
        provider
    );

    const fetchData = async () => {
        let retVal = await nftContract.totalSupply();
        retVal = retVal.toNumber();
        setTsupply(retVal);
    };

    fetchData();

    // About info
    const [info, setInfo] = useState(0);
    function handleDecreaseInfo(){
        if (info > 0) {
            setInfo(info - 1);
        }
        else {
            setInfo(2);
        }
    }

    function handleIncreaseInfo(){
        if (info < 2) {
            setInfo(info + 1);
        } else {
            setInfo(0);
        }
    }

    var infoGraphic;
    switch (info){
        case 0:
            infoGraphic = <div className="flex flex-col items-center md:flex-row h-full w-full">
                <StaticImage src="../images/about-mascot-1.png" alt="Do Kwon NFT" className="w-40"/>
                <p className="text-xl py-6 pl-4">9 per mint bc <span className="font-semibold">Greed is Good</span></p>
            </div>;
            break;
        case 1:
            infoGraphic = <div className="flex flex-col items-center md:flex-row  h-full w-full">
                <StaticImage src="../images/about-mascot-2.png" alt="Do Kwon NFT" className="w-40"/>
                <p className="text-xl py-6 pl-4">999 in the treasury because <span className="font-semibold">99.9</span> a <span className="font-red-300">good</span> number</p>
            </div>;
            break;
        case 2:
            infoGraphic = <div className="flex flex-col items-center md:flex-row  h-full w-full">
                <StaticImage src="../images/about-mascot-3.png" alt="Do Kwon NFT" className="w-60"/>
                <p className="text-xl py-6 pl-4">No utility because of <span className="font-semibold">Commandment #7</span>. <a href="https://etherscan.io/address/0xbe3ce5b42d581f085e08f267b28db520a3a6635a" className="underline font-semibold text-purple hover:text-blue-600">Contracts</a> are for nerds. <span className="font-semibold">CC0</span>.</p>
            </div>;
            break;
    }

    const leftCommandment = "flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-6 w-full";
    const rightCenterCommandment = "md:hidden flex flex-col justify-center items-center space-y-4 w-full text-center";
    const rightCommandment = "hidden md:flex justify-end items-center space-x-6 w-full text-right";

    return (
        <Layout>
            <div className="h-full max-h-screen overflow-hidden relative text-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <nav className="w-full flex items-center justify-center py-4">
                        <div className="text-5xl flex space-x-6">
                            <div className="cursor-pointer">
                                <a href="https://twitter.com/lunaticswtf" target="_blank">
                                    <i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} />
                                </a>
                            </div>

                            <a href="https://opensea.io/collection/lunaticswtf" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
                            {/*<MusicPlayer />*/}
                        </div>
                    </nav>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <StaticImage src="../images/cover.png" alt="Kwon Town" className="min-h-screen bg-no-repeat" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center">
                        <h1 className="text-6xl mt-4 whitespace-nowrap">lunatics <span className="underline">wtf</span></h1>
                        <StaticImage src="../images/website-mascot.png" alt="Do Kwon Mascot" className="w-32" />
                    </div>
                </div>

                <div className="absolute top-3/4 left-1/2 -translate-x-1/2">
                    <div className="flex space-x-4 items-center justify-center">
                        <p className="text-2xl whitespace-nowrap font-semibold">{tSupply}/9999 in Kwon Town</p>
                        <AnchorLink to="#about"><i className="fa-regular fa-circle-question text-2xl cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-dashed" /></AnchorLink>
                    </div>
                    <div className="flex justify-center pt-4 pb-6">
                        <Link to="/mint">
                            <div className="px-4 py-2 btn-gradient-border rounded-lg hover:drop-shadow-xl">
                                Mint Now
                            </div>
                        </Link>
                    </div>
                    <h2 className="text-5xl font-light text-center">#GreedisGood</h2>
                </div>
            </div>
            <div className="h-full px-4 md:px-10 lg:px-20 font-prata text-white bg-gradient-to-b from-purple to-green">
                <h1 className="text-5xl text-center py-12">10 Kwon Commandments</h1>
                <div className="flex flex-col md:space-y-2 items-center justify-between lg:px-60">
                    <div className={leftCommandment}>
                        <StaticImage src="../images/faces/crown-1.png" alt="Kwon commandment 1" className="w-56 lg:w-48"/>
                        <h4 className="text-5xl font-prata pt-10">1.</h4>
                        <p className="text-3xl font-light">Greed is Good</p>
                    </div>

                    <div className={rightCenterCommandment}>
                        <StaticImage src="../images/faces/mcdonalds-2.png" alt="Kwon commandment 1" className="w-60 lg:w-48"/>
                        <h4 className="text-5xl font-prata">2.</h4>
                        <p className="text-3xl font-light">99.99% is a good number whether red or green</p>
                    </div>
                    <div className={rightCommandment}>
                        <p className="text-3xl font-light">99.99% is a good number whether red or green</p>
                        <h4 className="text-5xl font-prata">2.</h4>
                        <StaticImage src="../images/faces/mcdonalds-2.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                    </div>

                    <div className={leftCommandment}>
                        <StaticImage src="../images/faces/moustache-3.png" alt="Kwon commandment 2" className="w-60 lg:w-48"/>
                        <h4 className="text-5xl font-prata">3.</h4>
                        <p className="text-3xl font-light">Stable is a state of mind</p>
                    </div>

                    <div className={rightCenterCommandment}>
                        <StaticImage src="../images/faces/aviators-4.png" alt="Kwon commandment 3" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">4.</h4>
                        <p className="text-3xl font-light">It’s not a crash, it’s a surprise free mint</p>
                    </div>
                    <div className={rightCommandment}>
                        <p className="text-3xl font-light">It’s not a crash, it’s a surprise free mint</p>
                        <h4 className="text-5xl font-prata">4.</h4>
                        <StaticImage src="../images/faces/aviators-4.png" alt="Kwon commandment 3" className="w-60 lg:w-80"/>
                    </div>

                    <div className={leftCommandment}>
                        <StaticImage src="../images/faces/luna-5.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">5.</h4>
                        <p className="text-3xl font-light">Watching companies burn is entertaining</p>
                    </div>

                    <div className={rightCenterCommandment}>
                        <StaticImage src="../images/faces/sad-6.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <p className="text-3xl font-light">If not entertained, burn your own company</p>
                        <h4 className="text-5xl font-prata">6.</h4>
                    </div>
                    <div className={rightCommandment}>
                        <p className="text-3xl font-light">If not entertained, burn your own company</p>
                        <h4 className="text-5xl font-prata">6.</h4>
                        <StaticImage src="../images/faces/sad-6.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                    </div>

                    <div className={leftCommandment}>
                        <StaticImage src="../images/faces/mask-7.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">7.</h4>
                        <p className="text-3xl font-light">A utility is a Ponzi with extra steps</p>
                    </div>

                    <div className={rightCenterCommandment}>
                        <StaticImage src="../images/faces/monocle-8.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">8.</h4>
                        <p className="text-3xl font-light">There’s nothing an airdrop can’t fix</p>
                    </div>
                    <div className={rightCommandment}>
                        <p className="text-3xl font-light">There’s nothing an airdrop can’t fix</p>
                        <h4 className="text-5xl font-prata">8.</h4>
                        <StaticImage src="../images/faces/monocle-8.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                    </div>

                    <div className={leftCommandment}>
                        <StaticImage src="../images/faces/yolo-9.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">9.</h4>
                        <p className="text-3xl font-light">When price is 0 add a 2<span className="line-through">.0</span> to the front</p>
                    </div>

                    <div className={rightCenterCommandment}>
                        <StaticImage src="../images/faces/lasers-10.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                        <h4 className="text-5xl font-prata">10.</h4>
                        <p className="text-3xl font-light">You can’t spell Treasury without Usery</p>
                    </div>
                    <div className={rightCommandment}>
                        <p className="text-3xl font-light">You can’t spell Treasury without Usery</p>
                        <h4 className="text-5xl font-prata">10.</h4>
                        <StaticImage src="../images/faces/lasers-10.png" alt="Kwon commandment 1" className="w-60 lg:w-80"/>
                    </div>
                </div>
            </div>
            <div id="about" className="h-full flex flex-col items-center bg-gradient-to-b from-green to-cream">
                <h2 className="text-5xl text-center py-20">Welcome to <span className="font-bold">Kwon Town</span></h2>
                <div className="flex space-x-6 justify-center items-center px-10 lg:px-0 w-full lg:w-1/2">
                    <i className="fa-solid fa-chevron-left text-3xl hover:text-blue-500" onClick={handleDecreaseInfo} />
                    {
                        infoGraphic
                    }
                    <i className="fa-solid fa-chevron-right text-3xl hover:text-blue-500" onClick={handleIncreaseInfo} />
                </div>
                <Link to="/mint">
                    <div className="px-4 py-2 bg-black text-white rounded-lg mt-4">
                        Enter Now
                    </div>
                </Link>
            </div>
            <footer className="w-full flex items-center justify-center py-12 bg-cream">
                <div className="text-5xl flex space-x-6 items-center">
                    <a href="https://twitter.com/lunaticswtf" target="_blank"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
                    <a href="https://opensea.io/lunaticswtf" target="_blank"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>

                    <a href="https://icy.tools/calendar" target="_blank"> <img src="https://cdn.icy.tools/images/icy-tools-dark.svg" alt="as seen on icy.tools" width="164" /></a>

                    {/*<button onClick={start}>Play</button>*/}
                    {/*<MusicPlayer />*/}
                    {/*<i className={`fa-solid fa-boombox ${terraGradient} ${onHover}`} />*/}
                </div>
            </footer>
        </Layout>
    )
}

export default IndexPage