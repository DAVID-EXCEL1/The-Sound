import Head from 'next/head';
import React from 'react';
import Navbar from '../navbar';

const Contact = () => {
    return (
        <>
            <Navbar/>
            <Head>
                <title>Contact | The Sound</title>
                <meta name="description" content="Get in touch with The Sound team for support, feedback, or inquiries." />
            </Head>

            <main className="bg-[#fbf9f7] text-gray-800 h-185 mt-1 px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                        Get in Touch
                    </h1>
                    <p className="mb-10 text-lg text-gray-600">
                        Have a question, suggestion, or need support? Reach out — we’re here to help you vibe better.
                    </p>

                    <form className="grid gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg p-4"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg p-4"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="border border-gray-300 rounded-lg p-4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Contact;
