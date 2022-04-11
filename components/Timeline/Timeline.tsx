import { FC } from "react";
import { Input } from "@nextui-org/react";

import ListUser from "./ListUser/ListUser";
import WoofCard from "../WoofItem/WoofCard";

import styles from "./Timeline.module.css";

const css = {
  input: { w: "100%", px: 0, mb: 12 },
};

const Timeline: FC = () => {
  return (
    <div className={styles.timeline}>
      <Input size="lg" placeholder="Search" css={css.input} />
      <ListUser />
      <WoofCard />
    </div>
  );
};

export default Timeline;
