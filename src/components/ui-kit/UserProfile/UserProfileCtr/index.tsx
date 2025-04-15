import { UserProfile } from '..';
import avatarImg from './assets/avatar.png';

export const UserProfileCtr = () => (
    <UserProfile
        name='Екатерина Константинопольская'
        nickname='bake_and_pie'
        imageSrc={avatarImg}
    />
);
