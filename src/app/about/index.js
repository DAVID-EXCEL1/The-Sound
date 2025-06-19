import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Navbar from '../navbar';

const About = () => {
    return (
        <>
        <Navbar/>
            <Head>
                <title>About | The Sound</title>
                <meta name="description" content="Learn more about The Sound, your go-to music streaming platform." />
            </Head>

            <main className="bg-[#fbf9f7] text-gray-800 h-185 mt-1 px-6 py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2">
                        <Image
                            src="/images/about-img.png" 
                            alt="About The Sound"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                            About The Sound
                        </h1>

                        <p className="text-lg leading-relaxed mb-6">
                            <strong>The Sound</strong> is your ultimate destination for high-quality music streaming.
                            Whether you're discovering new artists or vibing to your favorites, we bring the rhythm
                            straight to you—anytime, anywhere.
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            Built by music lovers, for music lovers, our mission is to make great music easily accessible
                            and enjoyable. Our playlists are curated to match every mood, and our interface is designed
                            for simplicity and immersion.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Join the community. Feel the beat. Experience the sound.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
