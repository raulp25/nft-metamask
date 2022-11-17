import Head from 'next/head';
import { HomePage, Navbar } from '../components';


const Home = () => {
  return (
      <div>
          <Head>
              <title>NTF DROP</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar/>

          <HomePage/>
      </div>
  )
}

export default Home

