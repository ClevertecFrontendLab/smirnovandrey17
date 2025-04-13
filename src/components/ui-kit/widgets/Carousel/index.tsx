import { Flex } from '@chakra-ui/react';

import { size as sizeLayout } from '~/components/layouts/Layout/config';
import { Card } from '~/components/ui-kit/widgets/cards/Card';

type Slide = {
    image: string;
    badgeLabel?: string;
    badgeVariant?: string;
    badgeIconName?: string;
    title: string;
    desc: string;
    bookmark?: boolean;
    share?: boolean;
    like?: boolean;
};

type CarouselCardProps = {
    slides: Slide[];
};

export const CarouselCard = ({ slides }: CarouselCardProps) => (
    <Flex
        w={{ base: `calc(100% + ${sizeLayout.mainLayout.gapSide.base}px)`, md: '100%' }}
        gap={{ base: '12px', xl: '24px' }}
        overflowX='scroll'
        mr={`${sizeLayout.mainLayout.gapSide.base}px`}
        flexGrow='0'
    >
        {slides.map((slide) => (
            <Card
                key={slide.image}
                image={slide.image}
                badgeLabel={slide.badgeLabel}
                badgeVariant={slide.badgeVariant}
                badgeIconName={slide.badgeIconName}
                title={slide.title}
                desc={slide.desc}
                bookmark={slide.bookmark}
                share={slide.share}
                like={slide.like}
            />
        ))}
    </Flex>
);
