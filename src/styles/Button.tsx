import { Button as B, ButtonProps } from 'rebass';
import { styled } from 'styled-components';
import { SpaceProps, color, space, ColorProps } from 'styled-system';

export const Button = styled(B)<ButtonProps & SpaceProps & ColorProps>`
    ${space};
    ${color}
`;
