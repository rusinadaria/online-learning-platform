import React, {FC, useState, ReactNode} from 'react';
import styles from '../../styles/FavButton.module.css'

interface FavButtonProps {
    onClick: () => void;
    children?: ReactNode;
}

const FavButton: FC<FavButtonProps> = ({onClick, children}) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
        onClick(); 
    };

    return (
        <button
            onClick={toggleFavorite}
            className={styles.favButton}
        >
            {children || (isFavorited ? '♥' : '♡')} 
        </button>
    );
};

export default FavButton;