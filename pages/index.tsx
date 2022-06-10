import type { NextPage } from 'next'
import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='lg:max-w-6xl mx-auto'>
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className='grid grid-cols-9'>

        {/*sidebar*/}
        <Sidebar />

        {/*feed*/}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home