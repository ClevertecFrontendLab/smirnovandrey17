import { Divider } from '@chakra-ui/react';

import { ButtonLink } from '~/components/ui-kit/buttons/ButtonLink';
import { Header2 } from '~/components/ui-kit/texts/header2';
import { ButtonMore } from '~/components/ui-kit/widgets/ButtonMore';
import { CardBlogs } from '~/components/ui-kit/widgets/CardBlogs';
import { CardThirdSwarm } from '~/components/ui-kit/widgets/cards/CardThirdSwarm';
import { CardSecondarySwarm } from '~/components/ui-kit/widgets/CardSecondarySwarm';
import { CarouselCard } from '~/components/ui-kit/widgets/Carousel';
import { Filters } from '~/components/ui-kit/widgets/Filters';
import { HeaderWithLink } from '~/components/ui-kit/widgets/HeaderWithLink';
import { NavSubHorizontal } from '~/components/ui-kit/widgets/NavSubHorizontal';
import { TitleDesc } from '~/components/ui-kit/widgets/TitleDesc';
import { TitleMain } from '~/components/ui-kit/widgets/TitleMain';

export const componentsMap = {
    TitleMain: TitleMain,
    Filters: Filters,
    Header2: Header2,
    CarouselCard: CarouselCard,
    CardSecondarySwarm: CardSecondarySwarm,
    HeaderWithLink: HeaderWithLink,
    ButtonLink: ButtonLink,
    CardBlogs: CardBlogs,
    ButtonMore: ButtonMore,
    TitleDesc: TitleDesc,
    Divider: Divider,
    CardThirdSwarm: CardThirdSwarm,
    NavSubHorizontal: NavSubHorizontal,
} as const;
