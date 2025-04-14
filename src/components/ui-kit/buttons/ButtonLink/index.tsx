import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router';

// @ts-expect-error TODO добавить типы
export const ButtonLink = ({ children, linkPath, testAttr, ...rest }) => (
    <Button
        as={Link}
        to={linkPath}
        size={{ lg: 'md', xl: 'lg' }}
        rightIcon={<ArrowForwardIcon />}
        data-test-id={testAttr}
        {...rest}
    >
        {children}
    </Button>
);
