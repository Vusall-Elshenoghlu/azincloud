import { createUseStyles } from 'react-jss';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import fonts from '../../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../../assets/styles/abstracts/mixins';

const styles = {
    headerContainer: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        display: 'block',
        paddingBottom: rem(200), // Increased to ensure subNavbar is visible
        overflow: 'visible', // Ensure nothing gets clipped
        [breakpoint(1440)]: {
            paddingBottom: rem(180),
        },
        [breakpoint(1285)]: {
            paddingBottom: rem(160),
        },
        [breakpoint(1024)]: {
            paddingBottom: rem(200), // Increased for mobile
        },
        [breakpoint(768)]: {
            paddingBottom: rem(180), // Fixed for 768px
        },
        [breakpoint(640)]: {
            paddingBottom: rem(160),
        },
        [breakpoint(480)]: {
            paddingBottom: rem(140),
        },
        [breakpoint(360)]: {
            paddingBottom: rem(120),
        },
        [breakpoint(320)]: {
            paddingBottom: rem(100),
        },
    },
    navBarBg: {
        width: '100%',
        display: 'block',
        marginBottom: 0,
        height: 'auto',
        objectFit: 'cover',
        maxWidth: '100%',
    },
    swiperContainer: {
        width: '100%',
        position: 'absolute',
        top: rem(120),
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: rem(50),
        padding: `0 ${rem(60)}`,
        height: rem(350),
        boxSizing: 'border-box',
        zIndex: 3,
        [breakpoint(1440)]: {
            gap: rem(40),
            padding: `0 ${rem(50)}`,
            top: rem(110),
            height: rem(340),
        },
        [breakpoint(1285)]: {
            gap: rem(30),
            padding: `0 ${rem(40)}`,
            top: rem(100),
            height: rem(320),
        },
        [breakpoint(1024)]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: rem(20),
            padding: `0 ${rem(30)}`,
            top: rem(80),
            height: rem(400),
        },
        [breakpoint(768)]: {
            padding: `0 ${rem(20)}`,
            top: rem(60),
            height: rem(350),
            gap: rem(18),
        },
        [breakpoint(640)]: {
            padding: `0 ${rem(18)}`,
            top: rem(50),
            height: rem(320),
            gap: rem(15),
        },
        [breakpoint(480)]: {
            padding: `0 ${rem(15)}`,
            top: rem(40),
            height: rem(300),
            gap: rem(12),
        },
        [breakpoint(360)]: {
            padding: `0 ${rem(12)}`,
            top: rem(35),
            height: rem(280),
            gap: rem(10),
        },
        [breakpoint(320)]: {
            padding: `0 ${rem(10)}`,
            top: rem(30),
            height: rem(260),
            gap: rem(8),
        },
    },
    swiperTextSection: {
        flex: '0 0 45%',
        width: '90%',
        marginLeft: rem(10),
        padding: rem(45),
        zIndex: 2,
        minWidth: 0,
        [breakpoint(1440)]: {
            flex: '0 0 48%',
            padding: rem(40),
        },
        [breakpoint(1285)]: {
            flex: '0 0 50%',
            padding: rem(35),
        },
        [breakpoint(1024)]: {
            flex: '1 1 auto',
            width: '100%',
            order: 2,
            textAlign: 'center',
            padding: rem(25),
        },
        [breakpoint(768)]: {
            order: 2,
            padding: rem(20),
        },
        [breakpoint(640)]: {
            padding: rem(18),
        },
        [breakpoint(480)]: {
            order: 2,
            padding: rem(15),
        },
        [breakpoint(360)]: {
            order: 2,
            padding: rem(12),
        },
        [breakpoint(320)]: {
            padding: rem(10),
        },
    },
    swiperWrapper: {
        position: 'relative',
        '& .swiper': {
            paddingBottom: rem(50),
            height: 'auto !important',
            minHeight: rem(120),
            [breakpoint(1440)]: {
                paddingBottom: rem(45),
                minHeight: rem(110),
            },
            [breakpoint(1024)]: {
                paddingBottom: rem(35),
                minHeight: rem(90),
            },
            [breakpoint(768)]: {
                paddingBottom: rem(30),
                minHeight: rem(80),
            },
            [breakpoint(640)]: {
                paddingBottom: rem(25),
                minHeight: rem(70),
            },
            [breakpoint(480)]: {
                paddingBottom: rem(20),
                minHeight: rem(60),
            },
            [breakpoint(360)]: {
                paddingBottom: rem(18),
                minHeight: rem(55),
            },
            [breakpoint(320)]: {
                paddingBottom: rem(15),
                minHeight: rem(50),
            },
        },
        '& .swiper-wrapper': {
            alignItems: 'stretch !important',
            height: 'auto !important',
        },
        '& .swiper-slide': {
            height: 'auto !important',
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
            minHeight: rem(80),
            [breakpoint(1440)]: {
                minHeight: rem(75),
            },
            [breakpoint(1024)]: {
                minHeight: rem(65),
            },
            [breakpoint(768)]: {
                minHeight: rem(55),
            },
            [breakpoint(640)]: {
                minHeight: rem(50),
            },
            [breakpoint(480)]: {
                minHeight: rem(45),
            },
            [breakpoint(360)]: {
                minHeight: rem(40),
            },
            [breakpoint(320)]: {
                minHeight: rem(35),
            },
        },
        '& .swiper-pagination': {
            position: 'static !important',
            display: 'flex !important',
            justifyContent: 'flex-start !important',
            alignItems: 'center !important',
            marginTop: rem(30),
            [breakpoint(1440)]: {
                marginTop: rem(28),
            },
            [breakpoint(1024)]: {
                justifyContent: 'center !important',
                marginTop: rem(25),
            },
            [breakpoint(768)]: {
                marginTop: rem(20),
            },
            [breakpoint(640)]: {
                marginTop: rem(18),
            },
            [breakpoint(480)]: {
                marginTop: rem(15),
            },
            [breakpoint(360)]: {
                marginTop: rem(12),
            },
            [breakpoint(320)]: {
                marginTop: rem(10),
            },
        },
        '& .swiper-pagination-bullet': {
            width: rem(50),
            height: rem(4),
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: rem(2),
            margin: `0 ${rem(8)} 0 0 !important`,
            transition: 'all 0.3s ease',
            [breakpoint(1440)]: {
                width: rem(45),
                height: rem(4),
                margin: `0 ${rem(7)} 0 0 !important`,
            },
            [breakpoint(1024)]: {
                width: rem(40),
                height: rem(3),
                margin: `0 ${rem(6)} 0 0 !important`,
            },
            [breakpoint(768)]: {
                width: rem(35),
                height: rem(3),
                margin: `0 ${rem(5)} 0 0 !important`,
            },
            [breakpoint(640)]: {
                width: rem(30),
                height: rem(3),
                margin: `0 ${rem(5)} 0 0 !important`,
            },
            [breakpoint(480)]: {
                width: rem(25),
                height: rem(2),
                margin: `0 ${rem(4)} 0 0 !important`,
            },
            [breakpoint(360)]: {
                width: rem(20),
                height: rem(2),
                margin: `0 ${rem(3)} 0 0 !important`,
            },
            [breakpoint(320)]: {
                width: rem(18),
                height: rem(2),
                margin: `0 ${rem(3)} 0 0 !important`,
            },
        },
        '& .swiper-pagination-bullet-active': {
            backgroundColor: 'white',
        },
    },
    slideContent: {
        color: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: rem(80),
        [breakpoint(1440)]: {
            minHeight: rem(75),
        },
        [breakpoint(1024)]: {
            justifyContent: 'center',
            minHeight: rem(65),
        },
        [breakpoint(768)]: {
            minHeight: rem(55),
        },
        [breakpoint(640)]: {
            minHeight: rem(50),
        },
        [breakpoint(480)]: {
            minHeight: rem(45),
        },
        [breakpoint(360)]: {
            minHeight: rem(40),
        },
        [breakpoint(320)]: {
            minHeight: rem(35),
        },
    },
    mainTitle: {
        fontSize: rem(48),
        fontWeight: '700',
        fontFamily: fonts.fontLato,
        lineHeight: '1.2',
        margin: 0,
        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 1,
        [breakpoint(1440)]: {
            fontSize: rem(44),
            lineHeight: '1.2',
        },
        [breakpoint(1285)]: {
            fontSize: rem(42),
            lineHeight: '1.2',
        },
        [breakpoint(1024)]: {
            fontSize: rem(32),
            textAlign: 'center',
            lineHeight: '1.3',
        },
        [breakpoint(768)]: {
            fontSize: rem(28),
            lineHeight: '1.3',
        },
        [breakpoint(640)]: {
            fontSize: rem(24),
            lineHeight: '1.35',
        },
        [breakpoint(480)]: {
            fontSize: rem(22),
            lineHeight: '1.4',
        },
        [breakpoint(360)]: {
            fontSize: rem(18),
            lineHeight: '1.4',
        },
        [breakpoint(320)]: {
            fontSize: rem(16),
            lineHeight: '1.45',
        },
    },
    swiperImageSection: {
        flex: '0 0 50%',
        zIndex: 2,
        minWidth: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [breakpoint(1440)]: {
            flex: '0 0 48%',
        },
        [breakpoint(1285)]: {
            flex: '0 0 45%',
        },
        [breakpoint(1024)]: {
            flex: '1 1 auto',
            width: '100%',
            order: 1,
            maxWidth: rem(350),
        },
        [breakpoint(768)]: {
            maxWidth: rem(300),
            order: 1,
        },
        [breakpoint(640)]: {
            maxWidth: rem(280),
            order: 1,
        },
        [breakpoint(480)]: {
            maxWidth: rem(260),
            order: 1,
        },
        [breakpoint(360)]: {
            maxWidth: rem(220),
            order: 1,
        },
        [breakpoint(320)]: {
            maxWidth: rem(200),
            order: 1,
        },
    },
    swiperCloudImg: {
        width: rem(600),
        height: rem(320),
        objectFit: 'cover',
        marginTop: rem(20),
        zIndex: 2,
        [breakpoint(1440)]: {
            width: rem(550),
            height: rem(300),
            marginTop: rem(18),
        },
        [breakpoint(1285)]: {
            width: rem(480),
            height: rem(260),
            marginTop: rem(15),
        },
        [breakpoint(1024)]: {
            width: rem(350),
            height: rem(180),
            marginTop: rem(10),
            order: 1,
        },
        [breakpoint(768)]: {
            width: rem(300),
            height: rem(150),
            marginTop: rem(8),
            order: 1,
        },
        [breakpoint(640)]: {
            width: rem(280),
            height: rem(140),
            marginTop: rem(7),
            order: 1,
        },
        [breakpoint(480)]: {
            width: rem(260),
            height: rem(130),
            marginTop: rem(5),
            order: 1,
        },
        [breakpoint(360)]: {
            width: rem(220),
            height: rem(110),
            marginTop: rem(5),
            order: 1,
        },
        [breakpoint(320)]: {
            width: rem(200),
            height: rem(100),
            marginTop: rem(3),
            order: 1,
        },
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: rem(8),
            [breakpoint(1024)]: {
                borderRadius: rem(6),
            },
            [breakpoint(768)]: {
                borderRadius: rem(4),
            },
            [breakpoint(320)]: {
                borderRadius: rem(3),
            },
        },
    },
    swiperText: {
        position: 'relative',
        '& .swiper': {
            height: 'auto !important',
            minHeight: rem(120),
            [breakpoint(1440)]: {
                minHeight: rem(110),
            },
            [breakpoint(1024)]: {
                minHeight: rem(100),
            },
            [breakpoint(768)]: {
                minHeight: rem(80),
            },
            [breakpoint(640)]: {
                minHeight: rem(75),
            },
            [breakpoint(320)]: {
                minHeight: rem(65),
            },
        },
        '& .swiper-wrapper': {
            alignItems: 'stretch !important',
            height: 'auto !important',
        },
        '& .swiper-slide': {
            height: 'auto !important',
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
            minHeight: rem(80),
            [breakpoint(1440)]: {
                minHeight: rem(70),
            },
            [breakpoint(1024)]: {
                minHeight: rem(60),
            },
            [breakpoint(768)]: {
                minHeight: rem(50),
            },
            [breakpoint(640)]: {
                minHeight: rem(45),
            },
            [breakpoint(320)]: {
                minHeight: rem(35),
            },
        },
    },
    cloudImage: {
        width: '100%',
        height: rem(320),
        objectFit: 'cover',
        borderRadius: rem(8),
        [breakpoint(1440)]: {
            height: rem(300),
        },
        [breakpoint(1024)]: {
            height: rem(250),
            borderRadius: rem(6),
        },
        [breakpoint(768)]: {
            height: rem(200),
            borderRadius: rem(4),
        },
        [breakpoint(640)]: {
            height: rem(180),
        },
        [breakpoint(480)]: {
            height: rem(150),
        },
        [breakpoint(360)]: {
            height: rem(120),
        },
        [breakpoint(320)]: {
            height: rem(100),
            borderRadius: rem(3),
        },
    },
    subNavbar: {
        width: '100%',
        position: 'absolute',
        display: 'block',
        bottom: rem(-120), // Fixed positioning from bottom
        left: 0,
        zIndex: 1,
        height: 'auto',
        objectFit: 'cover',
        maxWidth: '100%',
        [breakpoint(1440)]: {
            bottom: rem(-100),
        },
        [breakpoint(1285)]: {
            bottom: rem(-80),
        },
        [breakpoint(1024)]: {
            bottom: rem(-120),
        },
        [breakpoint(768)]: {
            bottom: rem(-100),
        },
        [breakpoint(640)]: {
            bottom: rem(-80),
        },
        [breakpoint(480)]: {
            bottom: rem(-60),
        },
        [breakpoint(360)]: {
            bottom: rem(-40),
        },
        [breakpoint(320)]: {
            bottom: rem(-20),
        },
    }
};

export const useHeaderStyles = createUseStyles(styles);
