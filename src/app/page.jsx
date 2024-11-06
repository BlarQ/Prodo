'use client'

import Image from "next/image";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user')

  // console.log(user)

  if (!user && !userSession) {
    router.push('/sign-up')
  }

  return (
    <div>
      <h2>Welcome</h2>

      <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log Out
      </button>
    </div>
  );
}
