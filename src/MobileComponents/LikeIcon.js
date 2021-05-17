import React from 'react';

export default function ExportLike(props) {
    const { num, string } = props;
    return (
        <div className="organizm-dashboard-active-mobile">
            <div className="element-mobile" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/lader--stroke-@2x.svg')` }}>
                <div className="overlap-group-5-mobile" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/subtract-2@2x.svg')` }}>
                    <div className="label-icon-mobile">
                        <Icons32Like />
                        <div className="string-4-mobile">
                            <div className="string-10-mobile valign-text-middle-mobile librebaskerville-normal-white-24px">{num}</div>
                            <div className="string-8-mobile valign-text-middle-mobile nunito-normal-white-13px">{string}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Icons32Like(props) {
    return (
        <div className="icons32-like-3-mobile">
            <div className="overlap-group1-3-mobile" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-26@2x.svg')` }}>
                <img className="transparent-rectangle-3-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle--4@2x.png' />
            </div>
        </div>
    );
}