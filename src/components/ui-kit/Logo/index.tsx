import { Link } from 'react-router';

import logo from './assets/logo.svg';
import logoText from './assets/logo-text.svg';
import styles from './Logo.module.scss';

export const Logo = () => (
    <Link to='/' className={styles.wrap}>
        <img className={styles.logo} src={logo} alt='yee daa logo' />
        <img className={styles.logoText} src={logoText} alt='yee daa logo text' />
    </Link>
);
