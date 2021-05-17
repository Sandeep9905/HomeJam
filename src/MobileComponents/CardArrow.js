import React from 'react';

export default function Icons24Arrow(props) {
    const { className } = props;

    return (
        <div className={`icons24-arrow-mobile ${className || ""}`}>
            <div className="overlap-group1-4-mobile">
                <img
                    className="transparent-rectangle-4-mobile"
                    src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle-2@2x.png"
                />
                <img
                    className="vector-16-mobile"
                    src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-2@2x.svg"
                />
            </div>
        </div>
    );
}