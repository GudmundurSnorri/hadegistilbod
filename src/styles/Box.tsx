import styled from 'styled-components';
import { ColorProps, SpaceProps, color, space, LayoutProps, layout } from 'styled-system';


type BoxProps = SpaceProps & ColorProps & LayoutProps;
const Box = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout}
`;

export default Box;