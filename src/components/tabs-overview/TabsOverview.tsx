import React from 'react';
import { Box } from '~/styles';
import { Root, TabsContent } from '@radix-ui/react-tabs';
import { TabHeader, TabsHeaderWrapper } from './TabsOverview.styled';
import { H1, PMediumRegular } from '~/styles/Text';
import { COLORS } from '~/styles/theme';
import Anchor from '~/styles/Anchor';
import { AiOutlineEdit } from 'react-icons/ai';
import Button from '../Atoms/Button';

type TabsSettings = {
  header: string;
  id: string;
  route: string;
  description: string;
  imageUrl: string;
}[];

const data: TabsSettings = [
  {
    header: ' Dominos',
    id: 'Dominos',
    route: '/company-id',
    description: 'Frábært staður sem að gerir pizzu',
    imageUrl:
      'https://w7.pngwing.com/pngs/870/682/png-transparent-domino-s-pizza-logo-domino-s-pizza-pizza-delivery-logo-pizza-domino-s-pizza-pizza-pizza-pizza-delivery.png',
  },
  {
    header: 'Subway',
    id: 'Subway',
    route: '/company-id',
    description: 'Frábært staður sem að gerir samlokur',
    imageUrl:
      'https://w7.pngwing.com/pngs/870/682/png-transparent-domino-s-pizza-logo-domino-s-pizza-pizza-delivery-logo-pizza-domino-s-pizza-pizza-pizza-pizza-delivery.png',
  },
];

const TabsOverview = () => {
  const headers: TabsSettings[0]['header'][] = data.map(
    (headers) => headers.header,
  );
  return (
    <Box p={6} backgroundColor="white">
      <Box>
        <Root defaultValue={headers[0]}>
          <TabsHeaderWrapper aria-label="Þín fyrirtæki">
            {headers.map((header) => (
              <TabHeader value={header} color={COLORS.PINK}>
                {header}
              </TabHeader>
            ))}
          </TabsHeaderWrapper>
          {data.map((item) => (
            <TabsContent value={item.header}>
              <Box display="flex" flexDirection="column" color={'black'} pt={5}>
                <Box display="flex" alignItems="center" py={2}>
                  <H1 pr={1}>{item.header}</H1>
                  <Button>
                    <AiOutlineEdit size={20} color={COLORS.PINK}/>
                  </Button>
                </Box>
                <PMediumRegular>{item.description}</PMediumRegular>
              </Box>
            </TabsContent>
          ))}
        </Root>
      </Box>
    </Box>
  );
};

export default TabsOverview;
