import Link from 'next/link';
import React from 'react';
import {
  AiOutlineAppstoreAdd,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineShop,
} from 'react-icons/ai';
import { Box } from '~/styles/';
import { PSmallRegular } from '~/styles/Text';
import { COLORS } from '~/styles/theme';
import { ListItem } from './SideMenuListItem.styled';

type SMLItem = {
  icon: React.ReactNode;
  title: string;
  url: string;
};

const data: SMLItem[] = [
  {
    icon: <AiOutlineHome size={20} />,
    title: 'Heim',
    url: '/hello',
  },
  {
    icon: <AiOutlineShop size={20} />,
    title: 'Fyrirtæki',
    url: '/fyrirtaeki',
  },
  {
    icon: <AiOutlineAppstoreAdd size={20} />,
    title: 'Veitingastaðir',
    url: '/restaurants',
  },
  {
    icon: <AiOutlineProfile size={20} />,
    title: 'Tilboð',
    url: '/tilbod',
  },
];

const SideMenuListItem = () => {
  return (
    <>
      {data.map((v) => {
        const { icon, title, url } = v;
        return (
          <Box mb={2}>
            <Link href={url}>
              <ListItem
                display="flex"
                alignItems="center"
                backgroundColor="transparent"
                px={2}
                py={1}
                borderRadius="10px"
                color={COLORS.GREY}
              >
                {icon}
                <Box ml={2} color="grey">
                  <PSmallRegular>{title}</PSmallRegular>
                </Box>
              </ListItem>
            </Link>
          </Box>
        );
      })}
    </>
  );
};

type SMLWrapperProps = {
  children: React.ReactNode;
};
const SideMenuListWrapper = ({ children }: SMLWrapperProps) => (
  <Box>{children}</Box>
);

export { SideMenuListItem, SideMenuListWrapper };
