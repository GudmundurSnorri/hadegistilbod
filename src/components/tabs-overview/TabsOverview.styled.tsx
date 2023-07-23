import { TabsTrigger, TabsList } from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { COLORS } from '~/styles/theme';

export const TabHeader = styled(TabsTrigger)<ColorProps>`
  padding: 12px 24px;
  border-right: 1px solid ${COLORS.PINK};
  &:last-child {
      border-left: 0px;
      border-right: 0px;
    }
    ${color}
    `;

export const TabsHeaderWrapper = styled(TabsList)`
  border: 1px solid ${COLORS.PINK};
  box-shadow: 16px 16px 26px -18px ${COLORS.PINKSHADOW};
  width: fit-content;
`;
