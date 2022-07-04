import { FC } from "react";
import { Avatar, Card, Grid, Text } from "@nextui-org/react";
import styles from "./WoofCard.module.css";

const Timeline: FC = () => {
  return (
    <Card className={styles.timeline}>
      <Grid.Container>
        <Grid xs={11} justify="flex-start" alignItems="center">
          <Avatar pointer size="md" src="/avatars/avatar-1.png" />
          <Text h5 css={{ ml: 12 }}>
            Kew Coder
          </Text>
        </Grid>
        <Grid xs={1} justify="flex-end" alignItems="center">
          <Avatar pointer src="/icons/dots.svg" />
        </Grid>
      </Grid.Container>
      <p>
        Hello guys, this is my peraonal portfolio website, i creating with html
        css and javascript. demo at http://kewcode.com , thank u . #webdev
      </p>
    </Card>
  );
};

export default Timeline;
