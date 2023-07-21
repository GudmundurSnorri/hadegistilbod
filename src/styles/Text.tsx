import styled from 'styled-components';
import { SpaceProps, space, TypographyProps, typography } from 'styled-system';

type TextComponentProps = SpaceProps & TypographyProps;
const Text = styled.h1<TextComponentProps>`
  ${space};
  ${typography};
`;

type TextProps = {
  children: React.ReactNode;
} & TextComponentProps;

const H1 = ({ children }: TextProps) => (
  <Text fontSize={4} fontWeight="400" fontFamily="monospace">
    {children}
  </Text>
);

const H2 = ({ children, ...rest }: TextProps) => (
  <Text fontSize={4} fontWeight="900" fontFamily="monospace" {...rest}>
    {children}
  </Text>
);

const Paragraph = styled.p<TextComponentProps>`
  ${space};
  ${typography};
`;

const LargeBold = ({ children }: TextProps) => (
  <Paragraph fontSize={4} fontWeight="900">
    {children}
  </Paragraph>
);

const LargeRegular = ({ children }: TextProps) => (
  <Paragraph fontSize={4} fontWeight="400">
    {children}
  </Paragraph>
);

const MediumBold = ({ children }: TextProps) => (
  <Paragraph fontSize={3} fontWeight="900">
    {children}
  </Paragraph>
);

const MediumRegular = ({ children }: TextProps) => (
  <Paragraph fontSize={3} fontWeight="400">
    {children}
  </Paragraph>
);

const SmallBold = ({ children }: TextProps) => (
  <Paragraph fontSize={2} fontWeight="900">
    {children}
  </Paragraph>
);

const SmallRegular = ({ children }: TextProps) => (
  <Paragraph fontSize={2} fontWeight="400">
    {children}
  </Paragraph>
);

export {
  H1,
  H2,
  LargeBold,
  LargeRegular,
  MediumBold,
  MediumRegular,
  SmallBold,
  SmallRegular,
};
