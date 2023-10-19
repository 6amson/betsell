
"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles/global.scss"
import logo from "../logo.svg";
import search from '../searchIcon.svg';
import metamask from '../MetaMask.svg';
import user from '../userIcon.svg';
import { useState, useEffect } from "react";


export default function Header() {
    const [isMetamaskConnected, setIsMetaMaskConnected] = useState(true);

    return (
        <div className="headerContainer">
            <div>
                <Image
                    src={logo}
                    width={100}
                    height={50}
                    alt="Betsell logo"
                />
            </div>
            <div className="searchDiv">
                <p>Marketplace</p>
                <Image
                    src={search}
                    className="searchIcon"
                    width={12}
                    height={12}
                    alt="Betsell logo"
                />
                <input
                    placeholder="search teams or leagues..."
                />
            </div>
            <div className="meta">
                {isMetamaskConnected ?
                    (
                        <div className="connectMetamask">
                            <div>
                                <p className="etherBalance">5.123ETH</p>
                                <p className="ethAddress">0x3fba3...</p>
                            </div>
                        </div>
                    ) : (
                        <div className="connectMetamask">
                            <div>
                                <Image
                                    src={metamask}
                                    width={25}
                                    height={25}
                                    alt="metamask icon"
                                />
                                <p>Connect Metamask</p>
                            </div>
                        </div>)
                }


                <div className="userMask">
                    <Image
                        src={user}
                        width={20}
                        height={20}
                        alt="user icon"
                    />
                </div>
            </div>
        </div>
    )
}