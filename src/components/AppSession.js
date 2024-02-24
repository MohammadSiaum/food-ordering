'use client';
import { useSession } from "next-auth/react";


export default function AppSession(){
    const session = useSession()
    console.log(session, 'from AppSession');

    return session;
}