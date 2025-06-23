import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook } from 'react-icons/im';
import { SiTiktok } from 'react-icons/si';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-[#334238] text-[#FAF2E8] px-6 pt-20 py-16">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold">We’d Love to Hear From You</h1>
                <p className="mt-4 text-lg max-w-xl mx-auto">
                    Whether it’s a prayer request, a testimony, or a question—reach out. You’re not alone.
                </p>
            </div>

            {/* Form + Info Section */}
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white/10 p-6 rounded-lg w-full md:w-2/3">
                    <form
                        action="https://formspree.io/f/mexample" // Replace with your actual Formspree or Google Form action
                        method="POST"
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-white/20 placeholder-[#FAF2E8] text-[#FAF2E8] focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded bg-white/20 placeholder-[#FAF2E8] text-[#FAF2E8] focus:outline-none"
                            required
                        />
                        <select
                            name="subject"
                            className="w-full p-3 rounded bg-white/20 text-[#FAF2E8] focus:outline-none"
                            required
                        >
                            <option value="">Select Subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="prayer">Prayer Request</option>
                            <option value="invite">Invite GenZ for Christ</option>
                            <option value="partnership">Partnership</option>
                            <option value="testimony">Testimony</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Your message..."
                            rows="5"
                            className="w-full p-3 rounded bg-white/20 placeholder-[#FAF2E8] text-[#FAF2E8] focus:outline-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#FAF2E8] text-[#334238] px-6 py-3 rounded-md font-semibold hover:bg-[#e8e0d2] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-6 w-full md:w-1/3">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p>info@genzforchrist.org</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p>+234 812 345 6789</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Location</h3>
                        <p>Lekki, Lagos, Nigeria</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 mt-2">
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <GrInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                <ImFacebook className="w-6 h-6" />
                            </a>
                            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                                <SiTiktok className="w-6 h-6" />
                            </a>
                            {/* Add more if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
