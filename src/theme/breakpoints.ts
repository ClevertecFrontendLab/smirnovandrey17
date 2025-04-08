import { breakpoints as bp } from '~/app/consts';

export const breakpoints = {
    [bp.base]: '0px',
    [bp.sm]: '360px',
    [bp.md]: '768px',
    [bp.lg]: '1440px',
    [bp.xl]: '1920px',
} as const;
