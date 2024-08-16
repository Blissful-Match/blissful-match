import React from 'react';
import { Profile } from '../Profile';

const MembersCard: React.FC<{ profile: Profile }> = ({
    profile,
}: {
    profile: Profile;
}) => {
    return (
        <div key={profile.name} className="grid grid-cols-4 h-fit gap-3">
            <div className="w-auto bg-bm-gray shadow-lg rounded-lg col-span-1 h-fit">
                <div className="m-2 flex flex-col items-center">
                    <div className="w-11/12 h-60 overflow-hidden grid">
                        <img
                            src={profile.imageUrl}
                            alt={profile.name}
                            className="justify-self-center"
                        />
                    </div>
                    <button className="mt-4 w-11/12 bg-gray-400 text-white py-2 rounded-lg">
                        View Profile
                    </button>
                </div>
            </div>

            <div className="bg-bm-gray shadow-lg rounded-lg col-span-3 p-7 h-fit">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-black">
                        <tbody>
                            <tr className="">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Name
                                </td>
                                <td className="px-6 py-2">{profile.name}</td>
                                <td className="px-6 py-2 font-medium">
                                    Height
                                </td>
                                <td className="px-6 py-2">{profile.height}</td>
                            </tr>
                            <tr className="border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Age
                                </td>
                                <td className="px-6 py-2">{profile.age}</td>
                                <td className="px-6 py-2 font-medium">Caste</td>
                                <td className="px-6 py-2">{profile.caste}</td>
                            </tr>
                            <tr className="border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Qualification
                                </td>
                                <td className="px-6 py-2">
                                    {profile.qualification}
                                </td>
                                <td className="px-6 py-2 font-medium">
                                    Sub Caste
                                </td>
                                <td className="px-6 py-2">
                                    {profile.subCaste}
                                </td>
                            </tr>
                            <tr className="border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Occupation
                                </td>
                                <td className="px-6 py-2">
                                    {profile.occupation}
                                </td>
                                <td className="px-6 py-2 font-medium">
                                    Mother Tongue
                                </td>
                                <td className="px-6 py-2">
                                    {profile.motherTongue}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Annual Income
                                </td>
                                <td className="px-6 py-2">{profile.income}</td>
                                <td className="px-6 py-2"></td>
                                <td className="px-6 py-2"></td>
                            </tr>
                            <tr>
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Marital Status
                                </td>
                                <td className="px-6 py-2">
                                    {profile.maritalStatus}
                                </td>
                                <td className="px-6 py-2"></td>
                                <td className="px-6 py-2"></td>
                            </tr>
                            <tr>
                                <td
                                    scope="row"
                                    className="px-6 py-2 font-medium"
                                >
                                    Location
                                </td>
                                <td className="px-6 py-2">
                                    {profile.location}
                                </td>
                                <td className="px-6 py-2"></td>
                                <td className="px-6 py-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MembersCard;
