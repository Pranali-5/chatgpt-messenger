import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
   <html lang="en">
    <head>
    <title>ChatGpt Messenger</title>
    <meta content="width=device-width,initial-scale=1" name="viewport"/>
    <link rel="icon" href="/favicon.ico"/>
    </head>
      <body>
        <SessionProvider>
     {
      !session ? (
        <Login/>
      ) : 
      (
           <div className='flex'>
          {/* sidebar */}
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto
          md:min-w-[20rem]'>
            <Sidebar/>
          </div>
          {/* ClientProvider -Notification */}
          <ClientProvider />
         <div className='bg-[#343541] flex-1'>
           {children}
         </div>
        </div>
      )
     }
        </SessionProvider>
      </body>
    </html>
  )
}
