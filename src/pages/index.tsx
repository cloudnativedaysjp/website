import React, { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { dkClient } from '../dreamkast/client'
import { Conference } from '../dreamkast/types'

const IndexPage: React.FC = () => {
  const now = new Date()
  const [conferences, setConferences] = useState<Conference[]>([])

  const listConferences = async () => {
    const conferencesList = await dkClient.List()
    setConferences(conferencesList)
  }

  useEffect(() => {
    listConferences()
  }, [])

  const archivedConferences = (): Conference[] => {
    return useMemo<Conference[]>(
      () =>
        conferences
          .filter((c: Conference) => c.status === 'archived')
          .reverse(),
      [conferences],
    )
  }

  const registeredConferences = (): Conference[] => {
    return useMemo<Conference[]>(
      () =>
        conferences
          .filter((c: Conference) => c.status === 'registered')
          .reverse(),
      [conferences],
    )
  }

  const conferenceDate = (c: Conference): string => {
    return useMemo<string>(
      () =>
        c.conferenceDays
          ?.filter((e) => !e.internal)
          .map((e) => e.date)
          .join(','),
      [conferences],
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>CloudNative Days</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/lp/favicon.ico" />
      </Head>
      <header className="w-screen h-24 bg-lp flex items-center justify-center">
        <div className="w-5/6 flex items-center justify-between">
          <a className="pt-1" href="#page-top">
            <img className="w-80" src="/images/lp/cnd_logo_white_small.png" />
          </a>
          <div className="text-white text-md text-shadow-lg font-semibold w-72 flex justify-between">
            <a href="#sec-about">About</a>
            <a href="#sec-upcoming-event">Event</a>
            <a href="#sec-previous-event">Previous</a>
            <a href="#sec-contact">Contact</a>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <section
          id="page-top"
          className="relative h-section flex justify-center items-center"
        >
          <img
            className="object-cover absolute w-full h-section"
            src="/images/lp/section0-bg.jpeg"
          />
          <div className="relative flex items-center flex-col">
            <h1 className="pb-14 max-w-2xl text-center text-8xl font-bold text-white text-shadow-xl">
              CloudNative Days will come in {now.getFullYear()}!!
            </h1>
            {registeredConferences()?.map((c: Conference) => (
              <a
                className="h-14 border border-solid border-green-400 flex justify-center items-center hover:bg-green-400 text-green-400 hover:text-black transition-all"
                href={'https://event.cloudnativedays.jp/' + c.abbr}
              >
                <p className="font-bold text-shadow-lg text-center text-2xl pl-2 pr-2">
                  ATTEND TO {c.name}
                </p>
              </a>
            ))}
            <div className="pt-6">
              <a
                href="#sec-about"
                className="text-white w-14 h-14 flex justify-center items-center border-2 border-solid border-white rounded-full"
              >
                <KeyboardArrowDownIcon fontSize="large" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="sec-about"
          className="bg-lp flex justify-center items-center"
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
        <section
          id="sec-upcoming-event"
          className="relative h-140 flex justify-center items-center"
        >
          <img
            className="object-cover absolute w-full h-140"
            src="/images/lp/section2-bg.jpeg"
          />
          <div className="relative flex items-center justify-between flex-col w-180 h-24 bg-blue-1000 bg-opacity-50">
            <h1 className="text-white text-3xl text-shadow-lg font-bold">
              Upcoming events
            </h1>
            {registeredConferences()?.map((c: Conference) => (
              <p className="pt-8 text-lg font-serif">
                <a
                  href={'https://event.cloudnativedays.jp/' + c.abbr}
                  className="text-green-400 hover:text-green-600 transition-all"
                >
                  {c.name}
                </a>
                <span className="text-white"> @{conferenceDate(c)} </span>
              </p>
            ))}
          </div>
        </section>
        <section
          id="sec-previous-event"
          className="bg-lp flex justify-center items-center"
        >
          <div className="text-white w-180 py-48 text-center">
            <h1 className="text-white text-3xl font-bold">Previous events</h1>
            <p className="pt-8 text-lg font-serif">See You Next Year!👋</p>
            {archivedConferences()?.map((c: Conference) => (
              <p className="pt-8 text-lg font-serif">
                <a
                  href={'https://event.cloudnativedays.jp/' + c.abbr}
                  className="text-green-400 hover:text-green-600 transition-all"
                >
                  {c.name}
                </a>
                <span className="text-white"> @{conferenceDate(c)}</span>
              </p>
            ))}
            {/* Dreamkast で配信していないイベントのリンクはハードコード */}
            <p className="pt-8 text-lg font-serif">
              <a
                href="https://cloudnativedays.jp/cndf2019/"
                className="text-green-400 hover:text-green-600 transition-all"
              >
                CloudNative Days Fukuoka 2019
              </a>
              <span className="text-white">
                {' '}
                @ ACROS Fukuoka, April 16, 2019
              </span>
            </p>
            <p className="pt-8 text-lg font-serif">
              <a
                href="https://cloudnativedays.jp/cndt2019/"
                className="text-green-400 hover:text-green-600 transition-all"
              >
                CloudNative Days Tokyo 2019
              </a>
              <span className="text-white"> / </span>
              <a
                href="https://openstackdays.com/"
                className="text-green-400 hover:text-green-600 transition-all"
              >
                OpenStack Days Tokyo 2019
              </a>
              <span className="text-white">
                {' '}
                @ Toranomon Hills Forum, July 22-23, 2019
              </span>
            </p>
            <p className="pt-8 text-lg font-serif">
              <a
                href="https://cloudnativedays.jp/cndk2019/"
                className="text-green-400 hover:text-green-600 transition-all"
              >
                CloudNative Days Kansai 2019
              </a>
              <span className="text-white">
                {' '}
                @ Congrès Convention Center, November 27-28, 2019
              </span>
            </p>
          </div>
        </section>
        <section
          id="sec-contact"
          className="relative h-180 flex justify-center items-center"
        >
          <img
            className="object-cover absolute w-full h-180"
            src="/images/lp/section4-bg.jpeg"
          />
          <div className="relative flex items-center justify-between flex-col w-180 h-48 bg-blue-1000 bg-opacity-50">
            <h1 className="text-white text-3xl text-shadow-lg font-bold">
              Contact
            </h1>
            <p className="py-2 text-lg font-serif text-white">
              You can contact us on the following social media!
            </p>
            <div className="flex justify-around w-80">
              <a
                className="w-36 h-12 border border-solid border-green-400 flex justify-center items-center hover:bg-green-400 text-green-400 hover:text-black transition-all"
                href="https://twitter.com/cloudnativedays"
              >
                <p className="flex font-bold text-shadow-lg text-center text-xl">
                  <svg
                    viewBox="0 0 24 24"
                    width="28px"
                    style={{ fill: 'currentColor' }}
                  >
                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                  </svg>
                  <span className="pl-1">TWITTER</span>
                </p>
              </a>
              <a
                className="w-36 h-12 border border-solid border-green-400 flex justify-center items-center hover:bg-green-400 text-green-400 hover:text-black transition-all"
                href="https://github.com/cloudnativedaysjp"
              >
                <p className="flex font-bold text-shadow-lg text-center text-xl">
                  <svg
                    viewBox="0 0 24 24"
                    width="28px"
                    style={{ fill: 'currentColor' }}
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                  </svg>
                  <span className="pl-1">GITHUB</span>
                </p>
              </a>
            </div>
            <p className="text-lg font-serif">
              <span className="text-white">Sponsor contact,</span>
              <a
                href="mailto:cndj-spo@impress.co.jp"
                className="text-green-400 hover:text-green-600 transition-all"
              >
                cndj-spo@impress.co.jp
              </a>
            </p>
          </div>
        </section>
        <footer className="text-center font-serif py-14 bg-lp">
          <p className="text-white">
            Copyright © CloudNative Days Committee (Secretariat by Impress
            Corporation)
          </p>
          <p className="text-white">
            Photos by © CloudNative Days Tokyo 2019 Committee / OpenStack Days
            Tokyo 2019 Committee
          </p>
        </footer>
      </main>
    </div>
  )
}

export default IndexPage
