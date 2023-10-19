import { useState } from "react";
import SidebarMarketplaceItem from "./sidebarMarketplaceItem";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "../../../src/app/marketplace/marketplace.scss"




export default function sidebarMarketplace() {


    const [sportCategories, setSportCategories] = useState([
        {
            sportIndex: 0,
            sport: "Baseball",
            isOpen: false,
            Options: ['MLB', 'NL', 'IL']
        },
        {
            sportIndex: 1,
            sport: "Basketball",
            isOpen: false,
            Options: ['NFL']
        },
        {
            sportIndex: 2,
            sport: "Ice Hockey",
            isOpen: false,
            Options: ['MLB', 'ICL', 'ILL']
        },
        {
            sportIndex: 3,
            sport: "American Football",
            isOpen: false,
            Options: ['NFL']
        },
        {
            sportIndex: 4,
            sport: "Soccer",
            isOpen: false,
            Options: ['Seria A', 'La liga', 'Premier league']
        }
    ]);

    const handleArrowClick = (questionIndex: number) => {
        setSportCategories((prev) => {
            return prev.map((item, index) => {
                if (index === questionIndex) {
                   return {...item, isOpen: !item.isOpen}
                } else {
                    return { ...item, isOpen: false };
                }
            });
        });
    };


    return (
        <section className="marketContainer">
            <div>
                <p>ALL SPORTS</p>
            </div>
            <div>
                {
                    sportCategories.map((item, index) => {
                        return (
                            <SidebarMarketplaceItem
                                sport={item.sport}
                                key={index}
                                isOpen={item.isOpen}
                                index={index}
                                options={item.Options}
                                handleArrowClick={handleArrowClick}
                            />
                        )
                    })

                }

                {/* <Accordion className="accordionContainer" fullWidth={true} itemClasses={itemClasses} showDivider={false}>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        {defaultContent}
                        
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" className="accordion1">
                        {defaultContent}
                        {one}
                        {one}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        {defaultContent}
                    </AccordionItem>
                </Accordion> */}
            </div>
        </section>
    )
}