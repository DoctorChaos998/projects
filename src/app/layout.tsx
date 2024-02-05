import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import React from "react";
import {Providers} from "@/store/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Powered by doctor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
            {children}
            <div id={"modalsContainer"}></div>
        </body>
      </html>
    </Providers>
  )
}
