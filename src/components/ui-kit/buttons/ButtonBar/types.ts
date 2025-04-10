import { ComponentType } from 'react';

export type TButtonBarProps = {
    label: string;
} & // Icon version
(| {
          icon: ComponentType<{ boxSize?: string | number; color?: string }>;
          imageSrc?: never;
      }
    // Image version
    | {
          icon?: never;
          imageSrc: string;
      }
) &
    (
        | { active?: boolean; invert?: never }
        | { active?: never; invert?: boolean }
        | { active?: never; invert?: never } // Neither is present
    );
