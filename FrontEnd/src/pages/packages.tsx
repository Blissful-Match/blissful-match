import * as React from 'react';
import tick from '@assets/images/tick.png';
import cross from '@assets/images/cross.png';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import Footer from '@components/Footer/Footer';

export function Packages() {
    return (
        <>
            <Navbar />
            <Banner title={'Packages'} />
            <div className="flex flex-col items-center pt-6 pb-4 bg-white max-w-screen-lg mx-auto">
                <div className="text-3xl font-medium text-center text-black mb-4 max-md:text-2xl">
                    Finding Your Perfect Partner Has Never Been Easier
                </div>
                <div className="text-lg text-black mb-6 px-4 max-md:text-base">
                    <p className="mb-3">
                        At Blissful Match, we believe in the beauty of lifelong
                        companionship. Our platform is designed to help you find
                        a partner who shares your values, interests, and dreams.
                        With our advanced matchmaking technology and
                        personalized support, you’re just a few clicks away from
                        meeting someone special.
                    </p>
                    <p className="font-bold text-xl">
                        Why Choose Blissful Match?
                    </p>
                    <ul className="list-none pl-0 mt-2 text-lg">
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Personalized Matchmaking: Our algorithm understands
                            what matters to you and finds partners who align
                            with your preferences.
                        </li>
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Verified Profiles: Safety is our priority. Every
                            profile on Blissful Match is verified for
                            authenticity, ensuring a genuine and respectful
                            community.
                        </li>
                        <li className="flex items-start mb-2">
                            <img
                                src={tick}
                                alt="tick"
                                className="w-5 h-5 mr-2"
                            />
                            Success Stories: Join thousands of happy couples who
                            found love on Blissful Match. Your story could be
                            next!
                        </li>
                    </ul>
                </div>
                <div className="text-2xl font-semibold text-center text-black mb-6 max-md:text-xl">
                    Choose Your Plan
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-full">
                    {/* Basic Plan */}
                    <div className="flex flex-col bg-white rounded-xl border border-orange-400 p-3 max-w-xs text-center max-md:max-w-full">
                        <div className="text-xl font-semibold text-orange-400 mb-1">
                            Basic
                        </div>
                        <div className="text-3xl text-orange-400 mb-1">
                            ₹700
                        </div>
                        <div className="text-lg mb-3">User/Month</div>
                        <ul className="list-none pl-0 text-lg">
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                30 CONNECTS/MONTH
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                UNLIMITED MESSAGES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                VIEW UNLIMITED PROFILES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                PROFILE SUGGESTIONS
                            </li>
                        </ul>
                        <div className="text-lg text-slate-400 mb-1 flex items-center">
                            <img
                                src={cross}
                                alt="cross"
                                className="inline w-4 h-4 mr-2"
                            />{' '}
                            VIEW PHONE
                        </div>
                        <div className="text-lg text-slate-400 mb-1 flex items-center">
                            <img
                                src={cross}
                                alt="cross"
                                className="inline w-4 h-4 mr-2"
                            />{' '}
                            RELATIONSHIP ADVISOR
                        </div>
                        <div className="text-lg text-slate-400 mb-1 flex items-center">
                            <img
                                src={cross}
                                alt="cross"
                                className="inline w-4 h-4 mr-2"
                            />{' '}
                            INTRODUCTIONS & MEETINGS
                        </div>
                        <div className="text-lg text-slate-400 flex items-center">
                            <img
                                src={cross}
                                alt="cross"
                                className="inline w-4 h-4 mr-2"
                            />{' '}
                            HANDPICKED MATCHES
                        </div>
                        <button className="mt-4 px-4 py-2 text-xl font-medium text-white bg-orange-400 rounded">
                            Choose Plan
                        </button>
                    </div>

                    <div className="flex flex-col bg-[#add8e6] rounded-xl border border-neutral-600 p-3 max-w-xs text-center max-md:max-w-full">
                        <div className="text-xl font-semibold mb-1">
                            Advance
                        </div>
                        <div className="text-3xl mb-1 ">₹1999</div>
                        <div className="text-lg mb-3 ">User/Month</div>
                        <ul className="list-none pl-0 mb-3 text-lg">
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                UNLIMITED CONNECTS/MONTH
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                UNLIMITED MESSAGES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                VIEW UNLIMITED PROFILES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                PROFILE SUGGESTIONS
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                VIEW PHONE
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                RELATIONSHIP ADVISOR
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                INTRODUCTIONS & MEETINGS
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                HANDPICKED MATCHES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                FIRST DATE
                            </li>
                        </ul>
                        <button className="mt-4 px-4 py-2 text-xl font-medium text-orange-400 bg-white rounded">
                            Choose Plan
                        </button>
                    </div>
                    {/* Premium Plan */}
                    <div className="flex flex-col bg-white rounded-xl border border-sky-900 p-3 max-w-xs text-center max-md:max-w-full">
                        <div className="text-xl font-semibold text-orange-400 mb-1">
                            Premium
                        </div>
                        <div className="text-3xl text-orange-400 mb-1">
                            ₹1200
                        </div>
                        <div className="text-lg mb-3">User/Month</div>
                        <ul className="list-none pl-0 mb-3 text-lg">
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                30 CONNECTS/MONTH
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                UNLIMITED MESSAGES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                VIEW UNLIMITED PROFILES
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                PROFILE SUGGESTIONS
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                VIEW PHONE
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                RELATIONSHIP ADVISOR
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                INTRODUCTIONS & MEETINGS
                            </li>
                            <li className="flex items-start mb-2">
                                <img
                                    src={tick}
                                    alt="tick"
                                    className="w-5 h-5 mr-2"
                                />
                                HANDPICKED MATCHES
                            </li>
                        </ul>
                        <button className="mt-4 px-4 py-2 text-xl font-medium text-white bg-orange-400 rounded">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
