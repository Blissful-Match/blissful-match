import React from 'react';
import { Profile, profiles } from './Profile';
import MembersCard from './InnerComponents/MembersCard';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';

const LikedProfiles: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner title="My Liked Profiles" />
            <div className="min-h-screen bg-white">
                <header className="bg-bm-primary p-4 flex justify-between items-center"></header>

                <div className="flex justify-center">
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

export default LikedProfiles;
