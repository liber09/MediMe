
import React from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from './_components/header/header';
import Menu from "./_components/menu/menu";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediMe',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Menu></Menu>
        {children}
      </body>
    </html>
  )
}
