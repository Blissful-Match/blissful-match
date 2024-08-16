import React from 'react';
import MembersListFilter from './InnerComponents/MembersListFilter';
import { Profile, profiles } from './Profile';
import MembersCard from './InnerComponents/MembersCard';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';

const MembersList: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner title="Members" />
            <div className="min-h-screen bg-white">
                <header className="bg-bm-primary p-4 flex justify-between items-center">
                    <div>
                        <p className="text-black font-bold">
                            294 profiles matched
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="Search profiles..."
                            className="px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <button className="bg-bm-secondary text-white px-4 py-2 rounded-lg">
                            Sort: Age
                        </button>
                    </div>
                </header>

                <div className="flex">
                    <aside className="w-1/4 p-4">
                        <MembersListFilter />
                    </aside>

                    <main className="bg-white w-3/4 p-4 grid grid-cols-1 gap-6">
                        {profiles.map((profile: Profile) => (
                            <MembersCard key={profile.id} profile={profile} />
                        ))}
                    </main>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default MembersList;
