import React from 'react';
import OrganizmReviewsCard from './ReviewCard';

export default function ReviewCardTimeLime() {
    const reviewData = [
        {
            name: 'Hellen Jummy',
            profilePic: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-9@2x.png',
            country: '🇺🇸',
            city: 'PALO ALTO, CA',
            feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum
            pellentesque eget ${<br />}laoreet adipiscing.`
        },
        {
            name: 'Isaac Oluwatemilorun',
            profilePic: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-7@2x.png',
            country: '🇮🇹',
            city: 'PALO ALTO, CA',
            feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum
            pellentesque eget ${<br />}laoreet adipiscing.`
        },
        {
            name: 'Hellen Jummy',
            profilePic: 'https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/img-9@2x.png',
            country: '🇺🇸',
            city: 'PALO ALTO, CA',
            feedback: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum
            pellentesque eget ${<br />}laoreet adipiscing.`
        }
    ]
    return (
        <div className="x4-mobile">
            <div className="header-1-mobile">
                <div className="title-1-mobile valign-text-middle-mobile librebaskerville-normal-white-20px">Reviews</div>
                <div className="string-1-mobile"></div>
            </div>
            <div className="testem-mobile">
                {reviewData.map(res => (
                    <OrganizmReviewsCard
                        title={res.name}
                        country={res.country}
                        city={res.city}
                        feedback={res.feedback}
                        avatar={res.profilePic} />
                ))}
            </div>
        </div>
    )
}