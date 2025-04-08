import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { styles } from './styles';

export const theme = extendTheme({
    breakpoints,
    colors,
    styles,
});
