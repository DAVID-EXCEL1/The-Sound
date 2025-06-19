import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="bg-[#fbf9f7] mt-1 py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                            The <span className="text-blue-600">Sound</span> Platform
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Dive into the rhythm of your favorite artists. Stream the latest hits, discover new sounds, and vibe endlessly — all in one place.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
                            Listen Now
                        </button>
                    </div>

                    {/* Right Illustration/Image */}
                    <div className="md:w-1/2">
                        <Image
                            src="/images/logo.png"
                            alt="Hero Illustration"
                            width={580}
                            height={580}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
