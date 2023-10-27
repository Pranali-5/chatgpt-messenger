'use client'
import React from 'react'
import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';
import Image from 'next/image';

export const Sidebar = () => {
  const {data: sessionData} = useSession();
  const [chats, loading, error] = useCollection(
     sessionData && query(collection(db, 'users', sessionData?.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
  );
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className='flex-1'>
            <div>
                {/* New Chat */}
                <NewChat/>

                <div className='hidden sm:inline'>
                  <ModelSelection/>
                    {/* Modal Selection */}
                </div>
                {/* Map through the ChatRows */}
                <div className='flex flex-col space-y-2 my-2'>
                  {
                    loading && (
                      <div className='animate-pulse text-center text-white'>
                        <p>Loading Chats...</p>
                      </div>
                    )
                  }
                  {
                  chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id}/>
                  ) )
                }
                </div>
            </div>
        </div>
        {
          sessionData && 
          (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
            onClick={()=>signOut()} 
            src={sessionData.user?.image!} 
            alt='profile'
            className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2
            hover:opacity-50'
            width={12}
            height={12}
            />
          )
        }
    </div>
  )
}
