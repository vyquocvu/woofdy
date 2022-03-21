
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Text, useTheme } from "@nextui-org/react";

import styles from './MenuItem.module.css';

interface MenuItemProps {
  icon: string;
  path: string;
  title: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, icon, path}) => {

  const { theme } = useTheme();
  return (
    <div className={styles.item}>
      <Link href={path}>
        <a>
          <Image width={36} height={36} src={icon} alt="icon" />
          <Text h4 color={theme?.colors.primaryDark.value} css={{ mx: 12 }}>
            {title}
          </Text>
        </a>
      </Link>
  </div>
  )
}

export default MenuItem;