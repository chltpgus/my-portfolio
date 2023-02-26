import { Noto_Sans_KR } from '@next/font/google';

const notoSansKrBold = Noto_Sans_KR({
    weight: '700',
    variable: '--noto-sans_KR-bold',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    fallback: ['system-ui'],
});

const notoSansKrRegular = Noto_Sans_KR({
    weight: '400',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--noto-sans_KR-regular',
    fallback: ['system-ui'],
});

const notoSansKrMedium = Noto_Sans_KR({
    weight: '500',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--noto-sans_KR-medium',
    fallback: ['system-ui'],
});

export { notoSansKrBold, notoSansKrRegular, notoSansKrMedium };

const fonts = {
    notoSansKrBold: notoSansKrBold,
    notoSansKrRegular: notoSansKrRegular,
    notoSansKrMedium: notoSansKrMedium,
};

export default fonts;
