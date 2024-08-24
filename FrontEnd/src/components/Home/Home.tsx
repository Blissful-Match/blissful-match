/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import homePageImage from '@assets/images/Rectangle 1.png';
import connect from '@assets/images/connect.png';
import signup from '@assets/images/signup.png';
import interact from '@assets/images/interact.png';
import ellipse from '@assets/images/ellipse.png';
import couple from '@assets/images/Home-Couple-Optimized 1.png';
import ellipse2 from '@assets/images/ellipse2.png';
import leftArrow from '@assets/images/left-arrow.png';
import rightArrow from '@assets/images/right-arrow.png';
import img1 from '@assets/images/img1.png';
import img2 from '@assets/images/img2.png';
import playStore from '@assets/images/Google-Play-Store.png';
import appStore from '@assets/images/app-store.png';
import bmLogo from '@assets/images/bm-logo.png';
import bestmatches from '@assets/images/Best Matches.png';
import verifiedprofile from '@assets/images/Verified Profile.png';
import privacy from '@assets/images/privacy.png';
import { useState } from 'react';

function Home() {
    const [formData, setFormData] = useState({
        lookingFor: '',
        ageFrom: '',
        ageTo: '',
        religion: '',
        location: '',
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="flex overflow-hidden flex-col pt-5 bg-white">
            <div className="flex overflow-hidden flex-col mt-3.5 w-full bg-white max-md:max-w-full">
                <div className="flex relative flex-col items-start px-16 pt-72 pb-3.5 w-full min-h-[980px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={homePageImage}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative text-8xl font-medium text-sky-200 max-md:max-w-full max-md:text-4xl -mt-[110px]">
                        Find Your Perfect Match <br />
                        <span className="text-orange-400">Trust the Best</span>
                    </div>
                    <div className="flex relative flex-col px-8 py-8 mt-11 max-w-full bg-neutral-950 bg-opacity-40 w-[866px] max-md:px-5 max-md:mt-10">
                        <div className="self-start text-7xl font-medium text-teal-300 max-md:max-w-full max-md:text-4xl">
                            I’M LOOKING FOR A
                        </div>
                        <div className="mt-7 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full text-3xl font-medium max-md:mt-10">
                                        <div className="flex gap-5 justify-between items-start px-10 pt-5 pb-7 whitespace-nowrap bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-500 max-md:px-5">
                                            <input
                                                type="text"
                                                name="lookingFor"
                                                value={formData.lookingFor}
                                                onChange={handleChange}
                                                placeholder="Women"
                                                className="bg-transparent border-none outline-none w-full"
                                            />
                                        </div>
                                        <div className="self-start mt-6 text-teal-300">
                                            Of Religion
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full text-3xl font-medium max-md:mt-10">
                                        <div className="flex gap-5 w-full whitespace-nowrap text-neutral-500">
                                            <div className="flex flex-1 gap-5 justify-between items-start px-7 py-6 bg-white rounded-3xl max-md:px-5">
                                                <input
                                                    type="number"
                                                    name="ageFrom"
                                                    value={formData.ageFrom}
                                                    onChange={handleChange}
                                                    placeholder="25"
                                                    className="w-24" // This sets the width to a fixed size of 6rem (96px)
                                                />
                                            </div>
                                            <div className="flex flex-1 gap-5 justify-between px-7 py-6 bg-white rounded-3xl max-md:pl-5">
                                                <input
                                                    type="number"
                                                    name="ageTo"
                                                    value={formData.ageTo}
                                                    onChange={handleChange}
                                                    placeholder="30"
                                                    className="w-24"
                                                />
                                            </div>
                                        </div>
                                        <div className="self-start mt-6 text-teal-300">
                                            And living in
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5 mt-3.5 w-full text-3xl font-medium whitespace-nowrap text-neutral-500 max-md:max-w-full">
                            <div className="flex gap-5 justify-between items-start px-9 py-6 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                                <input
                                    type="text"
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleChange}
                                    placeholder="Select Religion"
                                    className="bg-transparent border-none outline-none"
                                />
                            </div>
                            <div className="flex gap-5 justify-between px-7 py-6 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Mumbai"
                                    className="bg-transparent border-none outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="px-16 pt-4 pb-7 mt-10 text-3xl font-medium bg-sky-200 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-600 max-md:px-5 max-md:max-w-full flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-transparent border-none outline-none"
                            >
                                Let’s Begin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col pt-14 w-full bg-white max-md:max-w-full">
                <div className="flex gap-5 self-center w-full max-w-[1356px] max-md:max-w-full">
                    <div className="flex flex-col self-end mt-5 max-md:max-w-full">
                        <div className="shrink-0 max-w-full h-px w-[713px] max-md:mr-1" />
                        <div className="flex flex-wrap gap-3 self-center mt-6">
                            <img
                                loading="lazy"
                                src={signup}
                                className="object-contain shrink-0 max-w-full aspect-[1.12] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[104px]"
                            />
                            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                                <div className="self-start text-3xl font-semibold text-orange-400">
                                    Sign Up
                                </div>
                                <div className="mt-3.5 text-3xl text-black max-md:max-w-full">
                                    <span className="">Register for free</span>{' '}
                                    <span className="">
                                        & put up your matrimony profile
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-8 max-w-full h-px w-[712px] max-md:mr-1.5" />
                        <div className="flex flex-wrap gap-5 justify-between mt-1 w-full max-md:mr-1.5 max-md:max-w-full">
                            <div className="shrink-0 w-px h-[147px]" />
                            <div className="flex flex-wrap gap-5 my-auto">
                                <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                                    <div className="self-end text-3xl font-semibold text-orange-400">
                                        Connect
                                    </div>
                                    <div className="text-3xl text-black max-md:max-w-full">
                                        Select & Connect with matches you like{' '}
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src={connect}
                                    className="object-contain shrink-0 max-w-full aspect-[1.14] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[106px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pl-1.5 mt-2 w-full max-md:max-w-full">
                            <div className="shrink-0 max-w-full h-0.5 w-[712px] max-md:mr-1.5" />
                            <div className="flex flex-wrap gap-5 justify-between ml-5 max-md:max-w-full">
                                <div className="flex flex-wrap gap-2.5 self-start mt-2.5">
                                    <img
                                        loading="lazy"
                                        src={interact}
                                        className="object-contain shrink-0 self-start mt-1 max-w-full aspect-[1.11] w-[104px]"
                                    />
                                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <div className="self-start text-3xl font-semibold text-orange-400">
                                            Interact
                                        </div>
                                        <div className="mt-3 text-3xl text-black">
                                            Become a premium member & start a
                                            conversation{' '}
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 w-px h-[142px]" />
                            </div>
                            <div className="shrink-0 max-w-full h-0.5 w-[710px] max-md:mr-1.5" />
                        </div>
                    </div>
                    <div className="flex shrink-0 w-2 bg-sky-200 h-[489px]" />
                    <div className="flex-auto my-auto text-6xl text-black max-md:text-4xl">
                        <span className="font-semibold">Find Your </span>
                        <br />
                        <span className="font-semibold text-orange-400">
                            Special
                        </span>{' '}
                        <br />
                        <span className="font-semibold">Someone</span>
                    </div>
                </div>
                <div className="mt-20 w-full bg-orange-400 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                            <div className="max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={ellipse}
                                            className="object-contain w-full aspect-[0.71]"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                                        <div className="mt-44 text-6xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                                            Mobile App on <br />
                                            Android and iOSComming Soon....
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 justify-between items-start mt-9 max-md:mt-10 max-md:max-w-full">
                                <div className="flex shrink-0 w-2 bg-sky-200 h-[538px]" />
                                <img
                                    loading="lazy"
                                    src={couple}
                                    className="object-contain mt-6 w-full aspect-[0.97] max-md:max-w-full"
                                />

                                <img
                                    loading="lazy"
                                    src={ellipse2}
                                    className="object-contain shrink-0 self-end mt-80 w-52 max-w-full aspect-[0.62] max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 items-start mt-10 ml-20 max-w-[1736px] max-md:max-w-full">
                    <div className="flex flex-col self-end mt-11 max-md:mt-10 max-md:max-w-full">
                        <div className="w-full max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex grow text-black max-md:mt-10">
                                        <img
                                            loading="lazy"
                                            src={leftArrow}
                                            className="object-contain z-10 shrink-0 my-auto mr-0 aspect-square w-[50px]"
                                        />
                                        <div className="flex flex-col grow shrink-0 px-8 pt-6 pb-12 bg-white rounded-md basis-0 shadow-[4px_4px_5px_rgba(0,0,0,0.25)] w-fit max-md:px-5 max-md:max-w-full">
                                            <img
                                                loading="lazy"
                                                src={img1}
                                                className="object-contain w-full aspect-[1.67] max-md:max-w-full"
                                            />
                                            <div className="self-start mt-6 text-4xl font-medium">
                                                Senorita{' '}
                                                <span className="">&</span> Ryan
                                            </div>
                                            <div className="mt-5 text-3xl max-md:mr-1.5 max-md:max-w-full">
                                                I found my match on biyesadi.
                                                <br />
                                                com on one month.Not yet <br />
                                                married butgoing steady with{' '}
                                                <br />
                                                him.There cheers to here.Fairy{' '}
                                                <br />
                                                tales....
                                                <span className="text-teal-400">
                                                    Read more
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col pt-6 pb-16 pl-8 mx-auto w-full text-black bg-white rounded-md shadow-[4px_4px_5px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-wrap gap-0.5 self-start mr-0 text-4xl font-medium">
                                            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                                                <img
                                                    loading="lazy"
                                                    src={img2}
                                                    className="object-contain w-full aspect-[1.67] max-md:max-w-full"
                                                />
                                                <div className="self-start mt-6">
                                                    Ruhi{' '}
                                                    <span className="">&</span>{' '}
                                                    Ryan
                                                </div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                src={rightArrow}
                                                className="object-contain shrink-0 self-end mt-72 aspect-square w-[50px] max-md:mt-10"
                                            />
                                        </div>
                                        <div className="mt-1.5 mr-8 text-3xl max-md:mr-2.5 max-md:max-w-full">
                                            I found my match on biyesadi.
                                            <br />
                                            com on one month.Not yet <br />
                                            married butgoing steady with <br />
                                            him.There cheers to here.Fairy{' '}
                                            <br />
                                            tales....
                                            <span className="text-teal-400">
                                                Read more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-16 pt-4 pb-10 mt-10 ml-6 text-4xl font-semibold bg-sky-200 rounded-xl text-neutral-600 max-md:px-5 max-md:max-w-full">
                            View all
                        </div>
                    </div>
                    <div className="flex shrink-0 self-start w-2 bg-teal-300 h-[746px]" />
                    <div className="flex-auto my-auto text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="font-semibold">Blissfully Match</span>
                        <br />
                        <span className="font-semibold text-black">
                            with
                        </span>{' '}
                        <span className="font-semibold text-orange-400">
                            Million
                        </span>{' '}
                        <span className="font-semibold text-black">of </span>
                        <br />
                        <span className="font-semibold">Success stories</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-16 py-9 mt-20 w-full text-5xl bg-orange-400 text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    <div className="flex flex-wrap gap-5 justify-between ml-8 w-full max-w-[1485px] max-md:max-w-full max-md:text-4xl">
                        <div className="my-auto max-md:max-w-full max-md:text-4xl">
                            Your love story is ready to unfold!
                        </div>
                        <div className="px-12 py-10 bg-sky-200 rounded-[30px_0px_30px_0px] max-md:px-5 max-md:text-4xl">
                            Get Started
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 items-start px-16 py-20 mt-32 w-full bg-pink-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex-auto self-stretch my-auto text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                        <span className="font-semibold text-neutral-600">
                            Search by
                        </span>
                        <br />
                        <span className="font-semibold text-orange-400">
                            Popular
                        </span>{' '}
                        <br />
                        <span className="font-semibold text-neutral-600">
                            Matrimony Sites
                        </span>
                    </div>
                    <div className="flex shrink-0 w-2 bg-neutral-600 h-[694px]" />
                    <div className="flex flex-col items-start mt-3 max-md:max-w-full">
                        <div className="self-stretch max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full text-4xl max-md:mt-10 max-md:max-w-full">
                                        <div className="self-start text-black text-opacity-80">
                                            By Mother Tongue{' '}
                                        </div>
                                        <div className="flex shrink-0 mt-5 max-w-full bg-zinc-300 h-[3px] w-[683px]" />
                                        <div className="flex flex-wrap gap-5 justify-between mt-9 whitespace-nowrap text-neutral-500 max-md:mr-1 max-md:max-w-full">
                                            <div className="px-9 pt-3.5 pb-6 bg-white rounded-xl max-md:px-5">
                                                Bengali
                                            </div>
                                            <div className="px-9 pt-3.5 pb-6 bg-white rounded-xl max-md:px-5">
                                                Hindi
                                            </div>
                                            <div className="px-9 pt-3.5 pb-6 bg-white rounded-xl max-md:px-5">
                                                English
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                                    <div className="grow px-5 pt-3.5 pb-6 mt-24 w-full text-4xl bg-sky-200 rounded-xl text-neutral-600 max-md:pr-5 max-md:mt-10">
                                        More Matrimonials
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-4xl text-black text-opacity-80">
                            By Religion{' '}
                        </div>
                        <div className="flex shrink-0 mt-4 max-w-full h-1 bg-zinc-300 w-[683px]" />
                        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-10 text-4xl text-neutral-500 max-md:max-w-full">
                            <div className="px-10 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:px-5">
                                Muslim
                            </div>
                            <div className="px-9 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:px-5">
                                Hindu
                            </div>
                            <div className="px-4 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                                Christian
                            </div>
                            <div className="p-5 bg-sky-200 rounded-xl text-neutral-600 max-md:pr-5">
                                More Matrimonials
                            </div>
                        </div>
                        <div className="mt-4 text-4xl text-black text-opacity-80">
                            By Profession{' '}
                        </div>
                        <div className="flex shrink-0 mt-5 max-w-full h-0.5 bg-zinc-300 w-[684px]" />
                        <div className="flex gap-5 justify-between self-stretch mt-10 text-4xl text-neutral-500 max-md:max-w-full">
                            <div className="px-10 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:px-5">
                                Doctor
                            </div>
                            <div className="px-9 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:px-5">
                                Teacher
                            </div>
                            <div className="px-5 pt-3 pb-6 whitespace-nowrap bg-white rounded-xl max-md:pr-5">
                                Engineer
                            </div>
                            <div className="px-4 pt-3 pb-6 bg-sky-200 rounded-xl text-neutral-600 max-md:pr-5">
                                More Matrimonials
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center px-16 pt-16 pb-8 w-full text-5xl font-medium text-red-600 bg-gray-200 max-md:px-5 max-md:max-w-full max-md:text-4xl">
                    <div className="flex flex-wrap gap-5 items-start max-w-full w-[1234px] max-md:text-4xl">
                        <div className="grow max-md:max-w-full max-md:text-4xl">
                            Download the App Coming Soon
                        </div>
                        <img
                            loading="lazy"
                            src={playStore}
                            className="object-contain shrink-0 mt-2 w-60 max-w-full aspect-[3]"
                        />
                        <img
                            loading="lazy"
                            src={appStore}
                            className="object-contain shrink-0 self-stretch w-60 max-w-full aspect-[2.72]"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-20 py-24 w-full text-3xl text-center text-black bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <div className="flex flex-col mb-0 w-full max-w-[1626px] max-md:mb-2.5 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={bmLogo}
                            className="object-contain self-center max-w-full aspect-[4.05] w-[393px]"
                        />
                        <div className="mt-11 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
                            In today's world, finding a partner can be
                            difficult. There are so many options for singles to
                            choose from and they all seem alike! <br />
                            That is why Biyesadi was founded with the goal of
                            making your search easier we want you to find
                            happiness.
                        </div>
                        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            Biyesadi is Bangladesh's No.1 Matchmaking Service,
                            founded with a simple objective - to help people
                            find happiness and love in <br />
                            their lives. Biyesadi has helped more than a million
                            Bangladeshi couples marry each other
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start px-20 py-8 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col w-full max-w-[1593px] max-md:max-w-full">
                        <div className="flex flex-wrap gap-5 mr-8 w-full max-w-[1561px] max-md:mr-2.5 max-md:max-w-full">
                            <div className="flex flex-grow items-center justify-between gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                                    <div className="px-12 py-7 mt-10 w-full text-4xl font-medium text-center bg-sky-200 rounded-xl text-neutral-600 max-md:px-5 max-md:mt-10">
                                        Trusted By Millions
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-5 justify-between text-3xl text-neutral-500 max-md:max-w-full w-full">
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={bestmatches}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={verifiedprofile}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center flex-grow">
                                        <img
                                            loading="lazy"
                                            src={privacy}
                                            className="object-contain max-w-full aspect-[1.11] w-[123px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex shrink-0 self-end mt-5 max-w-full bg-zinc-300 h-[3px] w-full max-w-[900px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
