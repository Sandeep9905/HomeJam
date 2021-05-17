import React from 'react';
import Button2 from './Button';

export default function OrganizmReviewsCard(props) {
    const { title, city, country, avatar, feedback, className } = props;

    return (
        <div className={`organizm-reviews-card-3-mobile ${className || ""}`}>
            <div className="overlap-group1-5-mobile">
                <img className="bg-4-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/bg-1@2x.svg' />
                <div className="bg-5-mobile border-2px-porsche"></div>
                <div className="header-5-mobile">
                    <img className="img-4-mobile" src={avatar} />
                    <div className="header-4-mobile">
                        <div className="title-5-mobile valign-text-middle-mobile quattrocento-bold-white-16px">{title}</div>
                        <Button2 text4={country} paloAltoCa={city} />
                    </div>
                </div>
                <p className="body-2-mobile nunito-normal-white-16px">{feedback}</p>
                <div className="div-5-mobile"></div>
            </div>
        </div>
    );
}