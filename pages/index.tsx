import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/aboutme'
import ContactMe from '../components/contactme'
import Information from '../components/information'
import Masthead from '../components/masthead'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zayets Mykyta</title>
      </Head>
      <Masthead />
      <AboutMe />
      <Information />
      <ContactMe />
    </div>
  )
}

export default Home
