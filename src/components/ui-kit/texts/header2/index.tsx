import { Text, TextProps } from '@chakra-ui/react';

type THeader2Props = TextProps;

export const Header2 = ({ children, ...rest }: THeader2Props) => (
    <Text as='h2' variant='header2' {...rest}>
        {children}
    </Text>
);
