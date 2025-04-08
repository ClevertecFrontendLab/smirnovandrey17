import { size as s } from './config';

type TLayoutWidthByGap = (
    size: (typeof s.mainLayout.gapSide)[keyof typeof s.mainLayout.gapSide],
) => string;

export const layoutWidthByGap: TLayoutWidthByGap = (gap) =>
    gap ? `calc(100vw - ${gap * 2}px)` : '100vw';
