
import { FC } from 'react';
import { Input } from '@nextui-org/react';

import ListUser from './ListUser/ListUser';
import WoofCard from '../WoofItem/WoofCard';

import styles from './Timeline.module.css';


const Timeline: FC = () => {
  return (
    <div className={styles.timeline}>
      <Input size="lg" placeholder="Search" css={{ w: '100%', px: 12, mb: 12 }} />
      <ListUser />
      <WoofCard />
    </div>
  )
}

export default Timeline;