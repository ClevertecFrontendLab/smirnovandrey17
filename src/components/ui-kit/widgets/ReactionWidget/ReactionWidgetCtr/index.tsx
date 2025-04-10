import { ReactionWidget } from '..';
import type { TReactionWidgetConfig } from '../types';

const bookmark = 185,
    share = 589,
    like = 587;

export const ReactionWidgetCtl = ({ isColumn = false, size }: TReactionWidgetConfig) => (
    <ReactionWidget bookmark={bookmark} share={share} like={like} isColumn={isColumn} size={size} />
);
