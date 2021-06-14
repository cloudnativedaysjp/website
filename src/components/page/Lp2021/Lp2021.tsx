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
        <link rel="shortcut icon" href="/images/lp2021/favicon.ico" />
      </Head>
      <header></header>
      <section
        id="sec-1"
        className="relative w-full h-section flex justify-center items-center"
      >
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
            <a
              href="#sec-2"
              className="text-white w-14 h-14 flex justify-center items-center border-2 border-solid border-white rounded-full"
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="sec-2"
        className="bg-lp2021 flex justify-center items-center"
      >
        <div className="text-white w-180 py-48 text-center">
          <h1 className="text-white text-3xl font-bold">
            About CloudNative Days
          </h1>
          <p className="pt-8 text-lg">
            CloudNative Days
            はコミュニティ、企業、技術者が一堂に会し、クラウドネイティブムーブメントを牽引することを目的としたテックカンファレンスです。
          </p>
          <p className="pt-8 text-lg">
            最新の活用事例や先進的なアーキテクチャを学べるのはもちろん、ナレッジの共有やディスカッションの場を通じて登壇者と参加者、参加者同士の繋がりを深め、初心者から熟練者までが共に成長できる機会を提供します。
          </p>
          <p className="pt-8 text-lg">
            皆様がクラウドネイティブ技術を適切に選択し、活用し、次のステップに進む手助けになることを願っています。
          </p>
          <p className="pt-8 text-lg">
            クラウドネイティブで、未来を共に創造しましょう。
          </p>
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
