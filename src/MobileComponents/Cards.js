import React from 'react';
import Icons32Ticket from './CardTicket';
import Icons24Arrow from './CardArrow';

export default function OrganizmElementsCardsEventDefault2(props) {
    const { title, folk, image, ticketImage, className } = props;

    return (
        <div className={`organizm-elemen-s-event-default-2-mobile ${className || ""}`}>
            <div className="overlap-group3-mobile">
                <img className="border-2-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-2@2x.svg' />
                <div className="border-3-mobile"></div>
                <Icons32Ticket src={ticketImage} />
                <div className="button-2-mobile">
                    <div className="more-info-2-mobile valign-text-middle-mobile nunito-normal-blue-ribbon-16px">More Info</div>
                    <Icons24Arrow className="icons24-arrow-2-mobile" />
                </div>
                <div className="title-3-mobile valign-text-middle-mobile librebaskerville-bold-white-18px">{title}</div>
                <div className="label-2-mobile">
                    <div className="folk-1-mobile valign-text-middle-mobile nunito-semi-bold-buccaneer-12px">{folk}</div>
                </div>
                <img className="img-3-mobile" src={image} />
                <div className="div-4-mobile"></div>
            </div>
        </div>
    );
}