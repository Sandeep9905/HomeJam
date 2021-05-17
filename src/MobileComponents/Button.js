import React from 'react';

export default function Button2(props) {
    const { text4, paloAltoCa, className } = props;

    return (
        <div className={`button-5-mobile ${className || ""}`}>
            <div className="text-2-mobile valign-text-middle-mobile rubik-normal-white-24px">{text4}</div>
            <div className="palo-alto-ca-1-mobile valign-text-middle-mobile rubik-normal-ronchi-11px">{paloAltoCa}</div>
        </div>
    );
}