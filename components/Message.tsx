/* eslint-disable @next/next/no-img-element */
import { DocumentData } from 'firebase-admin/firestore'
import Image from 'next/image'
import React from 'react'
type Props = {
    message: DocumentData
}
const Message = ({
message
}: Props) => {
    const isChatGPT = message?.user?.name === 'ChatGPT'
  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
        <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
            <Image src={message?.user?.avatar} alt="profile" className='h-8 w-8' width={8} height={8}/>
            <p className='pt-1 text-sm'>
                {message?.text}
            </p>
        </div>
    </div>
  )
}

export default Message