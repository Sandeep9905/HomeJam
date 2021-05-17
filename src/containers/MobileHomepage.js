import React from 'react';
import './mobile.css';
import ReviewCardTimeLime from '../MobileComponents/ReviewCardTimelime';
import MovieCardTimeLime from '../MobileComponents/MovieCardTimeLime';
import DashboardIcon from '../MobileComponents/DashboardIcon';
import LikeIcon from '../MobileComponents/LikeIcon';
import Navbar from '../MobileComponents/Navbar';

export default function MobileHomepage() {
    return (
        <div class="container-center-horizontal-mobile">
            <div className="m-home-mobile screen-mobile">
                <div className="hero-1-mobile">
                    <div className="overlap-group5-mobile">
                        <div className="hero-mobile">
                            <div className="overlap-group-3-mobile" style={{ backgroundImage: `url('https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-15@1x.png')` }}>
                                <img className="overlay-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/overlay-1@1x.svg' />
                                <h1 className="title-mobile valign-text-middle-mobile">Cari Cari</h1>
                                <p className="subtitle-mobile nunito-normal-white-16px">Live from their sofa to yours. Get closer to your favorite artists, and never miss out."</p>
                            </div>
                        </div>
                        <div className="dashboard-mobile">
                            <LikeIcon num='456' string='Likes everyday' />
                            <DashboardIcon num='745'
                                image='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-28@2x.svg'
                                string='Online Events' />
                            <DashboardIcon num='+10K'
                                image='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-33@2x.svg'
                                string='Users' />
                            <DashboardIcon num='+2'
                                image='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-37@2x.svg'
                                string='Views every day' />
                        </div>
                        <Navbar />
                    </div>
                </div>
                <div className="body-mobile">
                    <MovieCardTimeLime />
                    <div className="flex-row-mobile">
                        <ReviewCardTimeLime />
                    </div>
                </div>
                <img className="elemet-mobile" src='https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/elemet@2x.svg' />
            </div>
        </div>
    );
}