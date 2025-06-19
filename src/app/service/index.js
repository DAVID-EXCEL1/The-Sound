import Head from 'next/head';
import React from 'react';
import Navbar from '../navbar';

const Services = () => {
    return (
        <>
            <Navbar/>
            <Head>
                <title>Services | The Sound</title>
                <meta name="description" content="Explore the services The Sound offers to enhance your music experience." />
            </Head>

            <main className="bg-[#fbf9f7] text-gray-800 h-185 mt-1 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
                        What We Offer
                    </h1>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🎧 Unlimited Albums</h3>
                            <p className="text-gray-600">
                                Stream your favorite tracks 24/7 without ads or interruptions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🌍 Discover New Artists</h3>
                            <p className="text-gray-600">
                                Browse trending and emerging artists across all genres worldwide.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">📱 Albums in one Sound</h3>
                            <p className="text-gray-600">
                                Enjoy albums seamlessly in one place, making it easy to access and organize your music collection.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🔊 High-Quality Audio</h3>
                            <p className="text-gray-600">
                                Experience crystal-clear sound with lossless audio streaming for true music lovers.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🤝 Collaborative Playlists</h3>
                            <p className="text-gray-600">
                                Create and share playlists with friends, making music discovery a social experience.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">⏯️ Offline Listening</h3>
                            <p className="text-gray-600">
                                Download your favorite albums and playlists to enjoy music even without an internet connection.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🗓️ Curated Events</h3>
                            <p className="text-gray-600">
                                Get access to exclusive virtual concerts, listening parties, and artist Q&A sessions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">📈 Personalized Recommendations</h3>
                            <p className="text-gray-600">
                                Discover new music tailored to your taste with our smart recommendation engine.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">🔒 Secure & Private</h3>
                            <p className="text-gray-600">
                                Your listening habits and personal data are protected with industry-leading privacy measures.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Services;
