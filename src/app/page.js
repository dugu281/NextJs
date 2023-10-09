"use client";

import React, { useState, useEffect} from "react";
import Table from "./table/page";

export default function App() {

    const [userInfo, setUserInfo] = useState([]);

    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // fetching users
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            const storedList = JSON.parse(localStorage.getItem("userData"));
            setUserInfo(storedList);
        }
    }, [])

    // add a new user
    const addUser = (e) => {
        e.preventDefault();

        const user = { name, countryCode, email, password }

        localStorage.setItem("userData", JSON.stringify([...userInfo, user]));

        setUserInfo([...userInfo, user]);

        setName("");
        setCountryCode("");
        setEmail("");
        setPassword("");
    };

    // clear all the user's data from localstorage
    const handleClear = () => {
        localStorage.removeItem("userData");
        setUserInfo([]);
    }


    return (
        <div className="mx-auto grid grid-cols-12 gap-4 bg-zinc-50 p-1">

            <div className="header col-span-12 rounded-lg border border-gray-300 py-4">
                <h3 className="text-center text-3xl">User Form</h3>
            </div>

            <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-5 md:col-span-5 md:m-3 m-0">
                <div className="flex justify-center align-center flex-col">

                    <h1 className="mx-auto text-2xl">User Form</h1>

                    <form onSubmit={addUser} className="my-4 w-full mx-auto max-w-lg">
                        <input
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Name"
                            className="my-2 text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            name="countryCode"
                            type="text"
                            value={countryCode}
                            placeholder="Country Code"
                            className="my-2 text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none"
                            onChange={(e) => setCountryCode(e.target.value)}
                            required
                        />
                        <input
                            name="email"
                            type="text"
                            value={email}
                            placeholder="Email"
                            className="my-2 text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            name="password"
                            autoComplete="on"
                            type="password"
                            value={password}
                            placeholder="Password"
                            className="my-2 text-md block px-3 py-2 rounded-lg w-full border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button className="bg-blue-800 rounded text-md block px-3 py-2 rounded-lg w-full text-white border-2 border-gray-300 shadow-md focus:border-gray-600 focus:outline-none" type="submit"> Submit </button>
                    </form>
                </div>
            </div>

            {/* table component */}
            <Table userInfo={userInfo} handleClear={handleClear} />

        </div>
    )
}
