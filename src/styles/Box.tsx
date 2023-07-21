import styled from 'styled-components';
import {
  ColorProps,
  SpaceProps,
  color,
  space,
  LayoutProps,
  layout,
  flexbox,
  FlexboxProps,
} from 'styled-system';

type BoxProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps;
const Box = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
`;

export default Box;
