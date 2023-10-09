"use client";
import React, { useMemo, useState } from 'react'

export default function Table(props) {

    const [query, setQuery] = useState("");

    const filteredItems = useMemo(() => {
        if (!query) {
            const sortedUserInfo = props.userInfo.sort((a, b) => a.email.localeCompare(b.email));
            return sortedUserInfo
        }
        return props.userInfo.filter(name => {
            return name.name.toLowerCase().includes(query.toLowerCase())
        })

    }, [props.userInfo, query])


    return (
        <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-5 md:col-span-7 md:m-3 m-0">

            <div className="flex justify-center align-center flex-col">

                <h1 className="mx-auto text-2xl">User's List</h1>

                <div className="w-full items-center">
                    <input
                        className="text-md block px-3 py-2 rounded w-full border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none my-4"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        type="search"
                        placeholder="Search user name..."
                    />
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">

                                {filteredItems.length ?
                                    <p>{filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}</p>
                                    : ""
                                }

                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Country Code</th>
                                            <th scope="col" className="px-6 py-4">Name</th>
                                            <th scope="col" className="px-6 py-4">Email</th>
                                            <th scope="col" className="px-6 py-4">Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredItems.map((data, index) => (
                                            <tr className="border-b dark:border-neutral-500" key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{data.countryCode}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{data.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{data.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{data.password}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center align-center">
                    {!props.userInfo.length ? null : (
                        <div>
                            <button className="bg-blue-800 rounded text-md block px-3 py-2 text-white border-2 border-gray-300 focus:border-gray-600" onClick={() => props.handleClear()}>
                                Clear
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
