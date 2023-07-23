import { styled } from 'styled-components';
import { Box } from '~/styles/';
import { COLORS } from '~/styles/theme';

const ListItem = styled(Box)`
  &:hover {
    background-color: ${COLORS.GREY_LIGHT};

    & > * {
      color: ${COLORS.DARK};
    }
  }
`;

export { ListItem };
