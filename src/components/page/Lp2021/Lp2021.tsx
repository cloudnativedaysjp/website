import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export const Lp2021: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{'CloudNative Days 2021'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      <section id="sec-1" className="w-full"></section>
      <footer className="text-center py-14 bg-lp2021">
        <p className="text-white">
          Copyright © CloudNative Days Committee (Secretariat by Impress
          Corporation)
        </p>
        <p className="text-white">
          Photos by © CloudNative Days Tokyo 2019 Committee / OpenStack Days
          Tokyo 2019 Committee
        </p>
      </footer>
    </div>
  )
}
