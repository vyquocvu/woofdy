import { tw } from 'twind';
import Head from 'next/head';

import LeftSide from 'components/LeftSide/LeftSide';
import MidWall from 'components/MidWall/MidWall';
import RightMenu from 'components/RightMenu/RightMenu';

const Home = () => (
  <div className="container">
    <Head>
      <title>Immutable</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={tw("bg-black w-full h-screen flex flex-row")}>
      <LeftSide />
      <MidWall />
      <RightMenu />
    </main>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
