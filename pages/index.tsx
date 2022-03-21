import Head from 'next/head';
import type { NextPage } from 'next'
import { Grid, Card, useTheme } from '@nextui-org/react';

import MenuItem from '../components/Menu/MenuItem';
import Timeline from '../components/Timeline/Timeline';
import RightBar from '../components/RightBar/RightBar';

import { menuItems } from '../utils/constants';


// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { theme } = useTheme();
  return (
    <div>
      <Head>
        <title>Woofdy</title>
        <meta name="description" content="Woofdy post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container gap={1} justify="center" css={{ h: "100vh", pt: 36, overflow: "hidden" }}>
        <Grid xs={3} direction="column">
          <Card css={{ background: "transparent" }}>
            <div>Logo Woofdy</div>
            <br />
            <br />
            {
              menuItems.map(item => (
                <MenuItem key={item.title} title={item.title} icon={item.icon} path={item.path} />
              ))
            }
          </Card>
        </Grid>
        <Grid xs={9} direction="row" css={{ minHeight: "100vh" }} >
          <Grid.Container gap={2} >
            <Grid xs={8} direction="row" >
              <Timeline />
            </Grid>
            <Grid xs={4} direction="row" >
              <RightBar />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Home
