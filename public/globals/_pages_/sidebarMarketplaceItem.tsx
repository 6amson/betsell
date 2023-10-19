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

    if (props.isOpen) {
        toggledisplay.display = 'block';
    }

    const handleClick = () => {
        props.isOpen === true;

        if(props.isOpen == false){
            !props.isOpen
            console.log('true')
        }
        

    }

    return (
        <div className="marketPlaceItem">
            <div key={props.index}>
                <ul>{props.sport}</ul>
                <div style={toggledisplay}>
                    {props.options.map((item, index) => <li>{item}</li>)}

                </div>
            </div>

            <div>
                <button
                onClick={() => {
                    props.handleArrowClick(props.index)

                }}
                className="sidebarButton"
            >
                <Image
                    src={expandArrow.src}
                    width={15}
                    height={15}
                    className={`${props.isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    alt="question arrow "
                ></Image>
            </button>
            </div>
        </div>
    )
}