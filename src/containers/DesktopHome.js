import React from 'react';
import './Desktop.css';
import Navbar from '../DesktopComponenets/Navbar';
import DashboardCircle from '../DesktopComponenets/DashboardCircle';
import MovieCardTimLime from '../DesktopComponenets/MovieCardTimeLime';
import ReviewsTimeLime from '../DesktopComponenets/ReviewsTimelime';

export default function DesktopHomePage() {
    return (
        <div className="container-fluid">
            <div className="d-home screen">
                <div class="overlap-group">
                    <div class="hero">
                        <div class="overlap-group2-2">
                            <div class="img-2">
                                <div class="overlap-group3">
                                    <img
                                        class="rectangle-157"
                                        src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/rectangle-157-1@1x.png"
                                    />
                                    <img
                                        class="overlay"
                                        src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609ec57bebca4dfe6f6da7c6/img/overlay-1@1x.svg"
                                    />
                                </div>
                            </div>
                            <h1 class="title-4 valign-text-middle">Cari Cari</h1>
                            <div class="text-5">
                                Live from their sofa to yours. Get closer to your favorite artists, and never <br /> miss out.
                            </div>
                            <div class="elements">
                                <DashboardCircle />
                                <DashboardCircle />
                                <DashboardCircle />
                                <DashboardCircle />
                            </div>
                        </div>
                    </div>
                    <Navbar />
                </div>
            </div>
            <div style={{ padding: '0 10em', backgroundColor: 'rgba(10, 11, 26, 1)' }}>
                <div className="d-home">
                    <div class="overlap-group1">
                        <div class="body-2">
                            <MovieCardTimLime />
                            <ReviewsTimeLime />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}