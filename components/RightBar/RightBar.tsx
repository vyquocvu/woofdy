/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import { Avatar, Text } from '@nextui-org/react';
import Trending from '../Trending/Trending';

import styles from './RightBar.module.css';


const Timeline: FC = () => {
  return (
    <div className={styles.rightBar}>
      <div className={styles.setting}>
        <Avatar src='/avatars/avatar-1.png'></Avatar>
        <div className={styles.user}>
          <Text h5>
            Kew Coder
          </Text>
          <Text h6>@kewcoder</Text>
        </div>
        <img src="/icons/cog.svg" alt="setting" />
      </div>
      <Trending />
    </div>
  )
}

export default Timeline;