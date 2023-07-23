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
  border,
  BorderProps
} from 'styled-system';

type BoxProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps & BorderProps;
const Box = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${border};
`;

export default Box;
