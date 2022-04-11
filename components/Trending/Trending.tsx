import { Card, Text } from "@nextui-org/react";
import { FC } from "react";

import styles from "./Trending.module.css";

const Trending: FC = () => {
  const listTrending = [
    {
      hashtag: "#react",
      count: "1.2k",
    },
    {
      hashtag: "#javascript",
      count: "1.2k",
    },
    {
      hashtag: "#typescript",
      count: "1.2k",
    },
    {
      hashtag: "#nodejs",
      count: "1.2k",
    },
    {
      hashtag: "#nextjs",
      count: "1.2k",
    },
    {
      hashtag: "#webdev",
      count: "1.2k",
    },
    {
      hashtag: "#webdesign",
      count: "1.2k",
    },
  ];

  return (
    <Card css={{ my: 16 }}>
      <Text h3>Trending</Text>
      {listTrending.map((item, index) => {
        return (
          <div className={styles.trendItem} key={item.hashtag}>
            <Text size={16} weight="bold" key={index}>
              {index + 1} {item.hashtag}
            </Text>
            <Text size={14}>{item.count}</Text>
          </div>
        );
      })}
    </Card>
  );
};

export default Trending;
