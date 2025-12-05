import React from 'react';
import {useCardStyles} from "./card.style";
interface CardType {
    id: number;
    name: string;
    src: string;
    matched: boolean;
}

export interface CardProps {
    card: CardType;
    onClick: (card: CardType) => void;
    isFlipped: boolean;
    isDisabled: boolean;
}
const Card = ({card, onClick, isFlipped, isDisabled}: CardProps) => {
    const handleClick = () => {
        if (!isDisabled && !isFlipped) onClick(card);
    };
    const styles = useCardStyles();
    return (
        <div
            className={styles.card}
            onClick={handleClick}
            role='button'
            tabIndex={0}
            aria-pressed={isFlipped}
        >
            <div className={`${styles.inner} ${isFlipped ? '': styles.flipped}`}>
                < div className = {styles.front} >
                < img src={card.src} alt={card.name} />
            </div>
                <div className={styles.back}>
                    <span className={styles.backText}>?</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
