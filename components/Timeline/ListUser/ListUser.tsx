/* eslint-disable @next/next/no-img-element */

import { FC } from "react";
import { Avatar, Grid } from "@nextui-org/react";

const Timeline: FC = () => {
  const pictureUsers = [
    {
      url: "/avatars/avatar-1.png",
      color: "secondary",
    },
    {
      url: "/avatars/avatar-2.png",
      color: "success",
    },
    {
      url: "/avatars/avatar-3.png",
      color: "warning",
    },
    {
      url: "/avatars/avatar-4.png",
      color: "error",
    },
    {
      url: "/avatars/avatar-5.png",
      color: "gradient",
    },
    {
      url: "/avatars/avatar-6.png",
      color: "gradient",
    },
    {
      url: "/avatars/avatar-7.png",
      color: "gradient",
    },
  ];

  return (
    <Grid.Container
      gap={2}
      css={{ overflow: "auto", flexWrap: "nowrap", p: 0, mb: 16 }}
    >
      <Grid>
        <Avatar
          pointer
          size="lg"
          icon={<img alt="icon" src="/icons/plus-circle.svg" />}
        />
      </Grid>
      {pictureUsers.map((avatar, index) => (
        <Grid key={index}>
          <Avatar
            size="lg"
            pointer
            src={avatar.url}
            zoomed
            bordered
            color="gradient"
            stacked
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Timeline;
