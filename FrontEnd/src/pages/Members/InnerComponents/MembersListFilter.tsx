import React, { useState } from 'react';
import { MARITAL_STATUS } from '@constants/MARITAL_STATUS';
import { RELIGION } from '@constants/RELIGION';
import { SUB_CASTE } from '@constants/SUB_CASTE';
import { LANGUAGES } from '@constants/LANGUAGES';
import { countriesWithStatesAndCities } from '@constants/COUNTRIES';
import { EMPLOYED_IN } from '@constants/EMPLOYED_IN';
import { EDUCATION_LEVEL } from '@constants/EDUCATION_LEVEL';

const MembersListFilter: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');
    const [states, setStates] = useState<{ state: string; cities: string[] }[]>(
        []
    );
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const country = event.target.value;
        setSelectedCountry(country);

        // Find the states corresponding to the selected country
        const countryData = countriesWithStatesAndCities.find(
            (c) => c.country === country
        );
        setStates(countryData ? countryData.states : []);
        setSelectedState('');
        setCities([]);
        setSelectedCity('');
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const state = event.target.value;
        setSelectedState(state);

        // Find the cities corresponding to the selected state
        const stateData = states.find((s) => s.state === state);
        setCities(stateData ? stateData.cities : []);
        setSelectedCity('');
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div className="w-full p-4 bg-bm-gray border border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4">
                Advanced Search
            </h2>
            <hr className="border-black" />
            <form className="space-y-4 mt-3">
                <div>
                    <label className="block text-gray-700 mb-2">
                        Looking For:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="lookingFor"
                                value="groom"
                                className="form-radio"
                            />
                            <span>Groom</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="lookingFor"
                                value="bride"
                                className="form-radio"
                            />
                            <span>Bride</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Age:</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="From"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="To"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Member ID:
                    </label>
                    <input
                        type="text"
                        placeholder="Member ID"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Marital Status:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value={null}>Select</option>
                        {MARITAL_STATUS.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Religion:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value={null}>Select</option>
                        {RELIGION.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Caste:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value={null}>Select</option>
                        {SUB_CASTE.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Mother Tongue:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value={null}>Select</option>
                        {LANGUAGES.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="block text-gray-700 mb-2"
                    >
                        Country:
                    </label>
                    <select
                        id="country"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    >
                        <option value={null}>Select</option>
                        {countriesWithStatesAndCities.map((countryData) => (
                            <option
                                key={countryData.country}
                                value={countryData.country}
                            >
                                {countryData.country}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="state" className="block text-gray-700 mb-2">
                        State:
                    </label>
                    <select
                        id="state"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={selectedState}
                        onChange={handleStateChange}
                        disabled={!selectedCountry}
                    >
                        <option value={null}>Select</option>
                        {states.map((stateData) => (
                            <option
                                key={stateData.state}
                                value={stateData.state}
                            >
                                {stateData.state}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">
                        City:
                    </label>
                    <select
                        id="city"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedState}
                    >
                        <option value={null}>Select</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Height:</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Occupation:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value="">Select</option>
                        {EMPLOYED_IN.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Native Place/ Origin:
                    </label>
                    <input
                        type="text"
                        placeholder="Native Place/ Origin"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">
                        Education:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value="">Select</option>
                        {EDUCATION_LEVEL.map((item) => (
                            <option key={item.key} value={item.value}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Mangal:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default MembersListFilter;
