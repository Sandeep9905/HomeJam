import React from 'react';

export default function Cards(props) {
    const { title, folk, ticketImage, image } = props;
    return (
        <div class="organizm-elemen-s-event-default" style={{ width: '270px' }}>
            <div class="overlap-group-2">
                <img
                    class="border-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/border-8@2x.svg"
                />
                <div class="border-2"></div>
                <div class="icons32-ticket">
                    <img
                        class="union"
                        src={ticketImage}
                    />
                </div>
                <div class="button-1">
                    <div class="more-info valign-text-middle nunito-semi-bold-blue-ribbon-16px">More Info</div>
                    <div class="icons24-arrow-1">
                        <div class="overlap-group-3">
                            <img
                                class="transparent-rectangle-2"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/transparent-rectangle-8@2x.png"
                            />
                            <img
                                class="vector-3"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec1134a5b8cd6aa2faa45/img/vector-2@2x.svg"
                            />
                        </div>
                    </div>
                </div>
                <div class="title-1 valign-text-middle librebaskerville-bold-white-20px">{title}</div>
                <div class="label-1">
                    <div class="folk valign-text-middle nunito-semi-bold-buccaneer-12px">{folk}</div>
                </div>
                <img
                    class="img"
                    src={image}
                />
                <div class="div-3"></div>
            </div>
        </div>
    )
}