import Head from "next/head";
import Image from "next/image";
import { Grid, Card, Text } from "@nextui-org/react";

import MenuItem from "../Menu/MenuItem";
import RightBar from "../RightBar/RightBar";
import LoginButton from "../LoginButton/LoginButton";

import { menuItems } from "../../utils/constants";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Woofdy</title>
        <meta name="description" content="Woofdy post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid.Container
        gap={1}
        justify="center"
        css={{ h: "100vh", pt: 36, overflow: "hidden" }}
      >
        <Grid xs={3} direction="column">
          <Card
            css={{
              h: "calc(100% - 40px)",
              background: "transparent",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Grid.Container alignItems="center">
                <Image
                  alt="woofdy"
                  src="/icons/woofdy.png"
                  height={50}
                  width={50}
                />
                <Text h3 css={{ pl: 16 }}>
                  Woofdy
                </Text>
              </Grid.Container>
              <br />
              <br />
              {menuItems.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  path={item.path}
                />
              ))}
            </div>
            <LoginButton />
          </Card>
        </Grid>
        <Grid xs={9} direction="row" css={{ minHeight: "100vh" }}>
          <Grid.Container gap={2}>
            <Grid xs={8} direction="row">
              {children}
            </Grid>
            <Grid xs={4} direction="row">
              <RightBar />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Layout;
