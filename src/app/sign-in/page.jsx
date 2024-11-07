'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const router = useRouter()

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user with email and password
            const userCredential = await signInWithEmailAndPassword(email, password);
            // console.log("Signed in user:", userCredential.user);

            // Clear inputs after successful sign-in
            setEmail('');
            setPassword('');
            setErrorMessage(null);
            router.push('/');
            sessionStorage.setItem('user', true)

        } catch (e) {
            console.error(e);
            setErrorMessage('Failed to sign in. Please check your credentials and try again.');
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-[#f5f5f7]'>
            <div className='border border-white rounded shadow py-4 px-8 bg-white'>
                <form className='space-y-4' onSubmit={handleSignIn}>
                    <h2 className='text-left text-xl font-bold py-2 text-[#141522]'>Sign In</h2>

                    <div className='flex flex-col space-y-1'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Example@gmail.com"
                            className='focus:outline-none px-2 h-10 rounded border min-w-64' />
                    </div>

                    <div className='flex items-center justify-center pr-4 border rounded space-y-1'>
                        <input
                            type={visibility ? "text" : "password"}
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className='focus:outline-none px-2 h-10 min-w-64' />

                        <span className='text-2xl' onClick={toggleVisibility}>
                            {
                                visibility ? <VscEyeClosed /> : <VscEye /> 

                            }
                        </span>
                    </div>

                    {errorMessage && (
                        <p className='text-red-500 text-center'>{errorMessage}</p>
                    )}

                    <button
                        className='w-full py-2 hover:bg-[#222335] bg-[#141522] duration-300 rounded text-white'
                        type="submit"
                    >
                        Sign In
                    </button>

                    <div className='text-center'>
                        <Link href={'/sign-up'}>Don&apos;t have an Account? <span className='text-blue-500'>Sign Up</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
