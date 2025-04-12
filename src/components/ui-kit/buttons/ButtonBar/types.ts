import { TIcon } from '~/components/ui-kit/Icons/types';

export type TButtonBarProps = {
    label: string;
    size?: 'lg';
} & ( // Icon version
    | {
          icon: TIcon;
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
