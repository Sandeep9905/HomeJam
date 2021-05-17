import React from 'react';
import OrganizmElementsCardsEventDefault2 from './Cards';

export default function MovieCardTimeLime() {
    const timelimedata = [
        {
            image: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-10@2x.png",
            title: 'Benny Dayal',
            folk: 'Folk',
            ticket: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec1134a5b8cd6aa2faa45/img/union@2x.svg'
        },
        {
            image: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-11@2x.png",
            title: 'Vijay Yesudas',
            folk: 'Bollywood',
            ticket: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec1134a5b8cd6aa2faa45/img/union@2x.svg'
        },
        {
            image: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-12@2x.png",
            title: 'Andrea Jeremiah',
            folk: 'Folk',
            ticket: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec1134a5b8cd6aa2faa45/img/union@2x.svg'
        },
        {
            image: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-13@2x.png",
            title: 'Shilpa Rao',
            folk: 'Folk',
            ticket: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/subtract-2@2x.svg'
        },
    ]
    return (
        <div className="upcoming-shows-mobile">
            <div className="header-mobile">
                <div className="flex-col-mobile">
                    <div className="title-1-mobile valign-text-middle-mobile librebaskerville-normal-white-20px">Upcoming Shows</div>
                    <div className="string-1-mobile"></div>
                </div>
                <div className="view-all-mobile valign-text-middle-mobile">View All</div>
            </div>
            <div className="content-mobile">
                {timelimedata.map(res => (
                    <OrganizmElementsCardsEventDefault2
                        title={res.title}
                        folk={res.folk}
                        image={res.image}
                        ticketImage={res.ticket}
                    />
                ))}
            </div>
        </div>
    )
}