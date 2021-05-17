import React from 'react';
import Cards from './Cards';

export default function MovieCardTimLime() {
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
        <div class="x1">
            <div class="header-1">
                <div class="flex-col-1">
                    <div class="title-3 valign-text-middle librebaskerville-normal-white-32px">Upcoming Shows</div>
                    <div class="element-2"></div>
                </div>
                <div class="view-all valign-text-middle">View All</div>
            </div>
            <div class="flex-row">
                {timelimedata.map(res => (
                    <Cards title={res.title} image={res.image} ticketImage={res.ticket} folk={res.folk} />
                ))}
                {/* <Cards />
                <Cards />
                <Cards />
                <Cards /> */}
            </div>
        </div>
    )
}