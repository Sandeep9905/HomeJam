import React from 'react';

export default function DashboardIcon(props) {
    const { num, string, vector2, image } = props;
    return (
        <div className="organizm-dashboard-active-mobile">
            <div className="element-1-mobile" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/lader--stroke-@2x.svg')` }}>
                <div className="overlap-group-1-mobile">
                    <img className="subtract-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle--4@2x.png' />
                    <div className="label-icon-1-mobile">
                        <div className="icons32-like-mobile">
                            <div className="overlap-group1-1-mobile">
                                <img
                                    className="vector-mobile"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-27@2x.svg"
                                />
                                <img className="vector-14-mobile" src={image} />
                                <img className="transparent-rectangle-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle--4@2x.png' />
                            </div>
                        </div>
                        <div className="string-12-mobile">
                            <div className="string-mobile valign-text-middle-mobile librebaskerville-normal-white-24px">{num}</div>
                            <div className="string-3-mobile valign-text-middle-mobile nunito-normal-white-13px">{string}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}