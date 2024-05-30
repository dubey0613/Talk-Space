import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TalkSpace",
  description: "Video Calling Application",
  icons: {
    icon: '/icons/logo.png'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout