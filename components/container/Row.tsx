import styled from 'styled-components';

import media from '@/styles/mediaQuery';
import fonts from '@/styles/fonts/notoSans';

interface RowProps {
  maxWidth?: number;
  color?: string;
  fontFamily?: "notoSansKrBold" | "notoSansKrRegular" | "notoSansKrMedium";
  justifyContent?: string;
  alignItems?: string;
  gap?: number;

  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginTop?: number;
  fontSize?: number;

  laptopPadding?: number;
  laptopPaddingLeft?: number;
  laptopPaddingRight?: number;
  laptopPaddingBottom?: number;
  laptopPaddingTop?: number;
  laptopMargin?: number;
  laptopMarginLeft?: number;
  laptopMarginRight?: number;
  laptopMarginBottom?: number;
  laptopMarginTop?: number;
  laptopFontSize?: number;

  tabletPadding?: number;
  tabletPaddingLeft?: number;
  tabletPaddingRight?: number;
  tabletPaddingBottom?: number;
  tabletPaddingTop?: number;
  tabletMargin?: number;
  tabletMarginLeft?: number;
  tabletMarginRight?: number;
  tabletMarginBottom?: number;
  tabletMarginTop?: number;
  tabletFontSize?: number;

  mobilePadding?: number;
  mobilePaddingLeft?: number;
  mobilePaddingRight?: number;
  mobilePaddingBottom?: number;
  mobilePaddingTop?: number;
  mobileMargin?: number;
  mobileMarginLeft?: number;
  mobileMarginRight?: number;
  mobileMarginBottom?: number;
  mobileMarginTop?: number;
  mobileFontSize?: number;
}

const getPixel = (value?: number) =>
  value ? `${value}px` : value === 0 ? "0px" : "";
const getRem = (value?: number) =>
  value ? `${value}rem` : value === 0 ? "0rem" : "";

const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  color: ${(props) => props.color};
  justify-content: ${(props) => props?.justifyContent};
  align-items: ${(props) => props?.alignItems};
  max-width: ${(props) => getPixel(props.maxWidth)};
  gap: ${(props) => getPixel(props.gap)};
  padding: ${(props) => getPixel(props.padding)};
  padding-left: ${(props) => getPixel(props.paddingLeft)};
  padding-right: ${(props) => getPixel(props.paddingRight)};
  padding-bottom: ${(props) => getPixel(props.paddingBottom)};
  padding-top: ${(props) => getPixel(props.paddingTop)};
  margin: ${(props) => getPixel(props.margin)};
  margin-left: ${(props) => getPixel(props.marginLeft)};
  margin-right: ${(props) => getPixel(props.marginRight)};
  margin-bottom: ${(props) => getPixel(props.marginBottom)};
  margin-top: ${(props) => getPixel(props.marginTop)};
  font-size: ${(props) => getRem(props.fontSize)};
  font-family: ${(props) => props?.fontFamily ? fonts[props?.fontFamily].style.fontFamily : fonts['notoSansKrRegular'].style.fontFamily};
  ${media.laptop} {
    padding: ${(props) => getPixel(props.laptopPadding)};
    padding-left: ${(props) => getPixel(props.laptopPaddingLeft)};
    padding-right: ${(props) => getPixel(props.laptopPaddingRight)};
    padding-bottom: ${(props) => getPixel(props.laptopPaddingBottom)};
    padding-top: ${(props) => getPixel(props.laptopPaddingTop)};
    margin: ${(props) => getPixel(props.laptopMargin)};
    margin-left: ${(props) => getPixel(props.laptopMarginLeft)};
    margin-right: ${(props) => getPixel(props.laptopMarginRight)};
    margin-bottom: ${(props) => getPixel(props.laptopMarginBottom)};
    margin-top: ${(props) => getPixel(props.laptopMarginTop)};
    font-size: ${(props) => getRem(props.laptopFontSize)};
  }
  ${media.tablet} {
    padding: ${(props) => getPixel(props.tabletPadding)};
    padding-left: ${(props) => getPixel(props.tabletPaddingLeft)};
    padding-right: ${(props) => getPixel(props.tabletPaddingRight)};
    padding-bottom: ${(props) => getPixel(props.tabletPaddingBottom)};
    padding-top: ${(props) => getPixel(props.tabletPaddingTop)};
    margin: ${(props) => getPixel(props.tabletMargin)};
    margin-left: ${(props) => getPixel(props.tabletMarginLeft)};
    margin-right: ${(props) => getPixel(props.tabletMarginRight)};
    margin-bottom: ${(props) => getPixel(props.tabletMarginBottom)};
    margin-top: ${(props) => getPixel(props.tabletMarginTop)};
    font-size: ${(props) => getRem(props.tabletFontSize)};
  }
  ${media.mobile} {
    padding: ${(props) => getPixel(props.mobilePadding)};
    padding-left: ${(props) => getPixel(props.mobilePaddingLeft)};
    padding-right: ${(props) => getPixel(props.mobilePaddingRight)};
    padding-bottom: ${(props) => getPixel(props.mobilePaddingBottom)};
    padding-top: ${(props) => getPixel(props.mobilePaddingTop)};
    margin: ${(props) => getPixel(props.mobileMargin)};
    margin-left: ${(props) => getPixel(props.mobileMarginLeft)};
    margin-right: ${(props) => getPixel(props.mobileMarginRight)};
    margin-bottom: ${(props) => getPixel(props.mobileMarginBottom)};
    margin-top: ${(props) => getPixel(props.mobileMarginTop)};
    font-size: ${(props) => getRem(props.mobileFontSize)};
  }
`;

export default Row;