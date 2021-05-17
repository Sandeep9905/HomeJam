import React from 'react';

export default function ReviewCard(props) {
    const { title, avatar, country, city, feedback } = props;
    return (
        <div class="review-1">
            <div class="overlap-group6">
                <img
                    class="bg"
                    src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/bg-1@2x.svg"
                />
                <div class="bg-1 border-2px-porsche"></div>
                <div class="header-5">
                    <img
                        class="img-7"
                        src={avatar}
                    />
                    <div class="header-2">
                        <div class="title-2 valign-text-middle quattrocento-bold-white-16px">{title}</div>
                        <div class="button-3">
                            <div class="text- valign-text-middle rubik-normal-white-24px">{country}</div>
                            <div class="palo-alto-ca valign-text-middle rubik-normal-ronchi-11px">{city}</div>
                        </div>
                    </div>
                </div>
                <p class="body nunito-normal-white-16px">
                    {feedback}
                </p>
                <div class="div-2"></div>
            </div>
        </div>
    )
}