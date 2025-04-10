import { Flex } from '@chakra-ui/react';

import { Reaction } from '~/components/ui-kit/Reaction';

import type { TReactionWidgetConfig, TReactionWidgetData } from './types';

type TReactionWidgetProps = TReactionWidgetConfig & TReactionWidgetData;

export const ReactionWidget = ({
    bookmark = 0,
    share = 0,
    like = 0,
    isColumn = false,
    size,
}: TReactionWidgetProps) => {
    const columnGapSize = size === 'lg' ? '24px' : '12px';
    return (
        <Flex
            alignItems='center'
            flexDirection={isColumn ? 'column' : 'row'}
            gap={isColumn ? columnGapSize : undefined}
        >
            <Reaction type='bookmark' size={size}>
                {bookmark}
            </Reaction>
            <Reaction type='share' size={size}>
                {share}
            </Reaction>
            <Reaction type='like' size={size}>
                {like}
            </Reaction>
        </Flex>
    );
};
