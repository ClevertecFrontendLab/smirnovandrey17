import styles from './ButtonMenu.module.scss';
import leftIcon from './left-icon.svg';

export const ButtonMenu = ({ classes }: { classes?: string }) => (
    <div className={classes ? `${styles.wrap} ${classes}` : styles.wrap}>
        <img src={leftIcon} alt='main menu button' />
    </div>
);
