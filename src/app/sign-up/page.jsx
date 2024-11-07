'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(email, password);
            // const user = userCredential.user;

            // Set the display name for the user
            // await updateProfile(user, { displayName: name });
            // console.log("User created with display name:", name);

            // Clear input fields after successful sign-up
            setName('');
            setEmail('');
            setPassword('');
            setErrorMessage(null);
            sessionStorage.setItem('user', true)

        } catch (e) {
            console.error(e);
            setErrorMessage('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-[#f5f5f7]'>
            <div className='border border-white rounded shadow py-4 px-8 bg-white'>
                <form className='space-y-4' onSubmit={handleSignUp}>
                    <h2 className='text-left text-xl font-bold py-2 text-[#141522]'>Sign Up</h2>

                    {/* <div className='flex flex-col space-y-1'>
                        <input 
                            type="text" 
                            name="text" 
                            id="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name" 
                            className='focus:outline-none px-2 h-10 rounded border min-w-72'/>
                    </div> */}

                    <div className='flex flex-col space-y-1'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Example@gmail.com"
                            className='focus:outline-none px-2 h-10 rounded border min-w-72' />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className='focus:outline-none px-2 h-10 rounded border min-w-72' />

                    </div>

                    {errorMessage && (
                        <p className='text-red-500 text-center'>{errorMessage}</p>
                    )}

                    <button
                        className='w-full py-2 hover:bg-[#222335] bg-[#141522] duration-300 rounded text-white'
                        type="submit"
                    >
                        Create an Account
                    </button>

                    <div className='text-center'>
                        <Link href={'/sign-in'}>Already have an Account? <span className='text-blue-500'>Sign In</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
