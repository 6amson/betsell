import Image from "next/image";
import { ReactNode } from "react";
import { useState } from "react";
import expandArrow from "../../expandArrow.svg"


interface sidebarProps {
    sport: string;
    isOpen: boolean;
    index: number;
    options: String[];
    handleArrowClick: (questionIndex: number) => void
}

export default function sidebarMarketplaceItem(props: sidebarProps) {

    // const [isOpen0, setIsOpen0] = useState(false);

    const toggledisplay = {
        display: 'none',
    };

    const rotatedisplay = {
        transform: 'rotate(0deg)'
    }

    if (props.isOpen) {
        toggledisplay.display = 'block';
        rotatedisplay.transform = "rotate(45)deg"
    }

    return (
        <div className="marketPlaceItem">
            <div key={props.index}>
                <ul className="listMarket">{props.sport}</ul>
                <div style={toggledisplay}>
                    {props.options.map((item, index) => <li className="listChildMarket">{item}</li>)}

                </div>
            </div>

            <div>
                <button
                onClick={() => {
                    props.handleArrowClick(props.index)

                }}
                className="sidebarButton"
                style={rotatedisplay}
            >
                <Image
                    src={expandArrow.src}
                    width={15}
                    height={15}
                    alt="question arrow "
                ></Image>
            </button>
            </div>
        </div>
    )
}