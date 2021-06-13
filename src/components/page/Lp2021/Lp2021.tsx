import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

export const Lp2021: React.FC = () => {
  return (
    <div>
      <Head>
        <title>{'CloudNative Days 2021'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      <section id="sec-1">
        <div className="relative w-full h-section flex justify-center items-center">
          <Image
            src="/images/lp2021/section0-bg.jpeg"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative flex items-center flex-col">
            <h1 className="pb-14 max-w-2xl text-center text-8xl font-bold text-white text-shadow-xl">
              CloudNative Days will come in 2021!!
            </h1>
            <a
              className="w-72 h-14 border border-solid border-green-400 flex justify-center items-center hover:bg-green-400 text-green-400 hover:text-black transition-all"
              href="https://event.cloudnativedays.jp/cndo2021"
            >
              <p className="font-bold text-shadow-lg text-center text-2xl">
                ATTEND TO CNDO 2021
              </p>
            </a>
            <div className="pt-6">
              <a className="text-white w-14 h-14 flex justify-center items-center border-2 border-solid border-white rounded-full">
                <KeyboardArrowDownIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </section>
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
