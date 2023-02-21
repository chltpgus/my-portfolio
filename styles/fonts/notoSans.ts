import { Noto_Sans_KR } from '@next/font/google';

const bold = Noto_Sans_KR({
    weight: '700',
    variable: '--noto-sans_KR-bold',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    fallback: ['system-ui'],
});

const regular = Noto_Sans_KR({
    weight: '400',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--noto-sans_KR-regular',
    fallback: ['system-ui'],
});

const medium = Noto_Sans_KR({
    weight: '500',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--noto-sans_KR-medium',
    fallback: ['system-ui'],
});

export { bold as notoSansKrBold, regular as notoSansKrRegular, medium as notoSansKrMedium };
