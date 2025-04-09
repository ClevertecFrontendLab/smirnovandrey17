import { ButtonMenu } from '~/components/ui-kit/ButtonMenu';
import { Logo } from '~/components/ui-kit/Logo';

import styles from './Header.module.scss';

export const Header = () => (
    <div className={styles.wrap}>
        <Logo />
        <ButtonMenu classes={styles.menuBtn} />
    </div>
);
