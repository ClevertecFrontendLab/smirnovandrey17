import { Avatar, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

type TButtonBarProps = {
    label: string;
    active?: boolean;
} & (
    | {
          icon: ReactElement;
          imageSrc?: never;
      }
    | {
          icon?: never;
          imageSrc: string;
      }
);

export const ButtonBar = ({ active, icon, imageSrc, label }: TButtonBarProps) => (
    <Flex
        flexDirection='column'
        alignItems='center'
        cursor='pointer'
        gap='4px'
        justifyContent='center'
        w='100%'
        sx={
            active
                ? {
                      backgroundColor: '#ffffd3',
                      backgroundImage:
                          'radial-gradient(50% 40% at 48.89% 37.5%, rgba(196, 255, 97, 0.6) 0%, rgba(255, 255, 255, 0) 80%)',
                  }
                : undefined
        }
    >
        <Avatar size='mdl' icon={icon} src={imageSrc} bg='transparent' />
        <Text
            as='div'
            textAlign='center'
            noOfLines={1}
            variant={active ? 'control.highlight' : 'control'}
        >
            {label}
        </Text>
    </Flex>
);
