import styled from 'styled-components';
import { SpaceProps, space, TypographyProps, typography } from 'styled-system';

type TextComponentProps = SpaceProps & TypographyProps;
export const Text = styled.h1<TextComponentProps>`
  ${space};
  ${typography};
`;

type TextProps = {
  children: React.ReactNode;
} & TextComponentProps;

export const H1 = ({ children, ...rest }: TextProps) => (
  <Text fontSize={4} fontWeight="400" fontFamily="monospace" {...rest}>
    {children}
  </Text>
);

export const H2 = ({ children, ...rest }: TextProps) => (
  <Text fontSize={4} fontWeight="900" fontFamily="monospace" {...rest}>
    {children}
  </Text>
);

const Paragraph = styled.p<TextComponentProps>`
  ${space};
  ${typography};
`;

export const PLargeBold = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={4} fontWeight="900" {...rest}>
    {children}
  </Paragraph>
);

export const PLargeRegular = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={4} fontWeight="400" {...rest}>
    {children}
  </Paragraph>
);

export const PMediumBold = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={3} fontWeight="900" {...rest}>
    {children}
  </Paragraph>
);

export const PMediumRegular = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={3} fontWeight="400" {...rest}>
    {children}
  </Paragraph>
);

export const PSmallBold = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={2} fontWeight="900" {...rest}>
    {children}
  </Paragraph>
);

export const PSmallRegular = ({ children, ...rest }: TextProps) => (
  <Paragraph fontSize={2} fontWeight="400" {...rest}>
    {children}
  </Paragraph>
);
