import Link from 'next/link';
import React from 'react';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProfile,
} from 'react-icons/ai';
import { Box } from '~/styles/';
import { PSmallRegular } from '~/styles/Text';

type SMLItem = {
  icon: React.ReactNode;
  title: string;
  url: string;
};

const data: SMLItem[] = [
  {
    icon: <AiOutlineHome size={24} />,
    title: 'Heim',
    url: '/hello',
  },
  {
    icon: <AiOutlineProfile size={24} />,
    title: 'Tilboð',
    url: '/tilbod',
  },
  {
    icon: <AiOutlineInfoCircle size={24} />,
    title: 'Upplýsingar',
    url: '/upplysingar',
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
              <Box display="flex" alignItems="center">
                {icon}
                <Box ml={2}>
                  <PSmallRegular>{title}</PSmallRegular>
                </Box>
              </Box>
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
  <Box ml={4}>{children}</Box>
);

export { SideMenuListItem, SideMenuListWrapper };
