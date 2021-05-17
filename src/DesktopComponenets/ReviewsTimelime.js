import React from 'react';
import ReviewCard from './ReviewCard';

export default function ReviewsTimeLime() {
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
        <div class="reviews">
            <div class="header-4">
                <div class="flex-col">
                    <div class="title valign-text-middle librebaskerville-normal-white-32px">Reviews</div>
                    <div class="element-1"></div>
                </div>
                <div class="arrows">
                    <div class="icons24-arrow-3">
                        <div class="overlap-group-4">
                            <img
                                class="transparent-rectangle-3"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609e8fd05dfda273535b8814/img/transparent-rectangle@2x.png"
                            />
                            <img
                                class="vector-8"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/vector-23@2x.svg"
                            />
                        </div>
                    </div>
                    <div class="icons24-arrow-4">
                        <div class="overlap-group-4">
                            <img
                                class="transparent-rectangle-4"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609e8fd05dfda273535b8814/img/transparent-rectangle@2x.png"
                            />
                            <img
                                class="vector"
                                src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/vector-22@2x.svg"
                            />
                        </div>
                    </div>
                </div>
                <div class="string">
                    <div class="number valign-text-middle nunito-semi-bold-white-16px">1</div>
                    <div class="text-1 valign-text-middle nunito-semi-bold-white-16px">/</div>
                    <div class="number-1 valign-text-middle nunito-semi-bold-white-16px">12</div>
                </div>
            </div>
            <div class="flex-row-1">
                {reviewData.map(res => (
                    <ReviewCard title={res.name}
                        avatar={res.profilePic}
                        country={res.country}
                        city={res.city}
                        feedback={res.feedback} />
                ))}
                {/* <ReviewCard />
                <ReviewCard />
                <ReviewCard /> */}
            </div>
        </div>
    )
}