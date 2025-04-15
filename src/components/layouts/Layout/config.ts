import { sizeNames as bp } from '~/app/consts';

export const size = {
    mainLayout: {
        gapSide: {
            [bp.base]: 16,
            [bp.md]: 20,
            [bp.lg]: 0,
        },
        maxWidth: 1920,
    },
    centerLayout: {
        gap: 24,
    },
    header: {
        height: {
            base: 64,
            lg: 80,
        },
    },
    footer: {
        height: 84,
    },
    sidebars: {
        width: 256,
    },
} as const;
