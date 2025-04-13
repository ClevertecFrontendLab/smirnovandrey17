import { Flex } from '@chakra-ui/react';

import { Reaction } from '~/components/ui-kit/Reaction';

import type { TReactionWidgetConfig, TReactionWidgetData } from './types';

type TReactionWidgetProps = TReactionWidgetConfig & TReactionWidgetData;

export const ReactionWidget = ({
    bookmark,
    share,
    like,
    isColumn = false,
    size,
}: TReactionWidgetProps) => {
    const columnGapSize = size === 'lg' ? '24px' : '12px';
    return (
        <Flex
            alignItems='center'
            flexDirection={isColumn ? 'column' : 'row'}
            gap={isColumn ? columnGapSize : undefined}
            columnGap={size === 'xs' ? '8px' : 0}
        >
            {bookmark && (
                <Reaction type='bookmark' size={size}>
                    {bookmark}
                </Reaction>
            )}
            {share && (
                <Reaction type='share' size={size}>
                    {share}
                </Reaction>
            )}
            {like && (
                <Reaction type='like' size={size}>
                    {like}
                </Reaction>
            )}
        </Flex>
    );
};
