import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main>
        <Sidebar />
        <Feed />
        <Widget />
      </main>

    </div>
  )
}

export default Home
