import {createUseStyles} from "react-jss";

const styles = {
    gameWrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-height: 600px) and (orientation: landscape)': {
            padding: '10px 0',
        },
    },

    gameContainer: {
        maxWidth: '900px',
        width: '95vw',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '40px 30px',
        borderRadius: '25px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        '@media (max-width: 768px)': { padding: '30px 20px' },
        '@media (max-width: 576px)': { width: '98vw', padding: '25px 15px' },
        '@media (max-height: 600px) and (orientation: landscape)': { padding: '20px 15px' },
    },

    title: {
        color: '#2c3e50',
        fontSize: '2.5rem',
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: '30px',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 768px)': { fontSize: '2rem', marginBottom: '25px' },
        '@media (max-width: 576px)': { fontSize: '1.8rem', letterSpacing: '1px' },
        '@media (max-height: 600px) and (orientation: landscape)': { fontSize: '1.5rem', marginBottom: '15px' },
    },

    controls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px',
        '@media (max-width: 768px)': { flexDirection: 'column', gap: '15px', marginBottom: '20px' },
    },

    restartBtn: {
        minWidth: '160px',
        padding: '12px 24px',
        fontSize: '1.1rem',
        fontWeight: 600,
        borderRadius: '15px',
        background: 'linear-gradient(45deg, #4caf50, #45a049)',
        border: 'none',
        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
            background: 'linear-gradient(45deg, #45a049, #4caf50)',
        },
        '&:active': { transform: 'translateY(0)' },
        '@media (max-width: 576px)': { minWidth: '140px', fontSize: '1rem', padding: '10px 20px' },
    },

    statsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        width: 'auto',
        '@media (max-width: 768px)': { width: '100%' },
    },

    movesDisplay: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(52, 152, 219, 0.1)',
        padding: '12px 20px',
        borderRadius: '12px',
        border: '2px solid rgba(52, 152, 219, 0.2)',
        '@media (max-width: 768px)': { justifyContent: 'center' },
    },

    label: { fontSize: '1.1rem', fontWeight: 600, color: '#34495e' },
    value: { fontSize: '1.3rem', fontWeight: 800, color: '#3498db', minWidth: '30px', textAlign: 'center' },

    progressContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        '@media (max-width: 576px)': { flexDirection: 'column', gap: '8px' },
    },

    progressBar: {
        width: '150px',
        height: '8px',
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
        '@media (max-width: 576px)': { width: '200px' },
    },

    progressFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #4caf50, #8bc34a)',
        borderRadius: '4px',
        transition: 'width 0.5s ease',
    },

    progressText: { fontSize: '0.9rem', fontWeight: 600, color: '#666' },

    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        userSelect: 'none',
        '@media (max-width: 768px)': { gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))', gap: '15px' },
        '@media (max-width: 576px)': { gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
        '@media (max-width: 400px)': { gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' },
    },

    cardContainer: { perspective: '1000px', cursor: 'pointer' },

    card: {
        position: 'relative',
        width: '100%',
        height: '120px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        borderRadius: '15px',
        '@media (max-width: 768px)': { height: '100px' },
        '@media (max-width: 576px)': { height: '85px' },
        '@media (max-width: 400px)': { height: '75px' },
        '@media (max-height: 600px) and (orientation: landscape)': { height: '70px' },
    },

    cardFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
    },

    cardBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        transform: 'rotateY(180deg)',
    },

    cardPattern: {
        fontSize: '2.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        animation: 'pulse 2s infinite',
        '@media (max-width: 768px)': { fontSize: '2rem' },
        '@media (max-width: 576px)': { fontSize: '1.8rem' },
        '@media (max-width: 400px)': { fontSize: '1.5rem' },
    },

    cardImage: {
        width: '60px',
        height: '60px',
        objectFit: 'contain',
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))',
        '@media (max-width: 768px)': { width: '50px', height: '50px' },
        '@media (max-width: 576px)': { width: '40px', height: '40px' },
        '@media (max-width: 400px)': { width: '35px', height: '35px' },
        '@media (max-height: 600px) and (orientation: landscape)': { width: '35px', height: '35px' },
    },

    matched: {
        '& .cardFront, & .cardBack': {
            borderColor: '#4caf50',
            boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)',
        },
        '& .cardBack': {
            background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%)',
        },
    },

    victoryModal: {
        '& .modal-content': {
            border: 'none',
            borderRadius: '25px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        },
    },

    victoryContent: { textAlign: 'center', padding: '40px 30px', color: 'white', '@media (max-width: 768px)': { padding: '30px 20px' } },
    victoryIcon: { fontSize: '4rem', marginBottom: '20px', animation: 'bounce 1s infinite', '@media (max-width: 768px)': { fontSize: '3rem' } },
    victoryTitle: { fontSize: '2.5rem', fontWeight: 800, marginBottom: '15px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', color: 'blue', '@media (max-width: 768px)': { fontSize: '2rem' } },
    victoryText: { fontSize: '1.2rem', marginBottom: '25px', opacity: 0.9, color: 'red' },

    starRating: { display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '30px' },
    starFilled: { fontSize: '2rem', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' },
    starEmpty: { fontSize: '2rem', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', opacity: 0.3 },

    playAgainBtn: {
        minWidth: '180px',
        padding: '15px 30px',
        fontSize: '1.2rem',
        fontWeight: 600,
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        color: 'black',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.3)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            color: 'black !important',
        },
    },

    '@keyframes pulse': {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
    },

    '@keyframes bounce': {
        '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
        '40%': { transform: 'translateY(-10px)' },
        '60%': { transform: 'translateY(-5px)' },
    },
} as const;

export const useMemoryCardStyles = createUseStyles(styles);