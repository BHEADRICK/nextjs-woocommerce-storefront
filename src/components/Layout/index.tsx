import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../Footer'
import LayoutElement, { NavbarHolder } from './layout.elements'

//import Navbar from '../Navbar'

import Sidebar from '../Sidebar'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../Navbar'), { ssr: false, loading: () => <NavbarHolder /> })

interface LayoutProps {
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,

  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const baseInfo = {
    author: 'Romanas',
    name: 'Masazuotojasromanas.lt',
    url: 'https://wwww.masazuotojasromanas.lt',
    description:
      'Masažuotojo Romano asmeninė svetainė. Masažai ir konsultacijos sveikos gyvensenos klausimais',
    keywords: `Masažas, Viso kūno masažas, Sportinis masažas, Nugaros masažas, Konsultacijos, Sveikata, Mityba, Laikysena`,
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={baseInfo.description} />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={baseInfo.description} key="ogdesc" />
        <meta
          property="og:image"
          content="https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/masazuotojas_romanas.jpg"
          key="ogimage"
        />
        <meta property="og:url" content={baseInfo.url} key="ogurl" />
        <meta property="og:site_name" content={baseInfo.name} key="ogsitename" />

        {/* <link rel="canonical" href={baseInfo.url} /> */}
        <meta name="author" content={baseInfo.author} />
        <meta name="keywords" content={baseInfo.keywords} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{pageTitle} | Masažuotojas Romanas</title>
      </Head>
      <LayoutElement>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <main>{children}</main>

        <Footer />
        <CookieConsent
          buttonText="Supratau"
          style={{
            background: 'rgba(0,0,0,0.7)',
            padding: '0 15px',
            display: 'flex',
            justifyContent: 'center',
          }}
          buttonStyle={{
            background: '#ff3b6a',
            borderRadius: '30px',
            color: '#000',
            fontSize: '15px',
            fontWeight: '600',
            padding: '10px',
          }}
        >
          Šioje svetainėje naudojami slapukai (angl. cookies):{' '}
          <Link href="/privatumo-politika">
            <a style={{ color: '#fff' }}>Sužinoti daugiau</a>
          </Link>
        </CookieConsent>
      </LayoutElement>
    </>
  )
}

export default Layout
