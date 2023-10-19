'use client';

import Image from 'next/image'
import { useState, useEffect } from "react";
import "./marketplace.scss"
import Sidebar from "../../../public/globals/_pages_/sidebarMarketplace"


export default function Marketplace() {
    return (
        <section className='marketSection'>
            <div className='sidebarContainer'>
                <Sidebar />
            </div>
        </section>
    )
}