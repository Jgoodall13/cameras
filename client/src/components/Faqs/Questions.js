import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Questions = () => {
    return (
        <div className="faqs">
            <div className="faq-title-div">
                <h2 className="faq-title">Freqently Asked Questions</h2>
            </div>
            <div className="questions">
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>What is a Time of Flight (TOF) camera?</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>- A Time of Flight (TOF) camera uses a modulated light source (in our case an infrared VCSEL Laser) and a time resolved sensor to measure distance using the speed of light. Time of Flight technology has mm scale resolution and can be used to many meters of range.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Are volume discounts available?</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>- Yes. Please contact us for details. </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Are custom cameras available?</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>- Yes. We are able to produce custom cameras that are optimized for your application</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Can multiple cameras be run without interference? </h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>- Yes. The cameras use a spread spectrum to minimize interference.</p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}

const styles = {
    trigger: {
        color: 'blue'
    }
}

export default Questions;