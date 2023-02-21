import { deviceSize } from "./theme";

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  mobile: mediaQuery(deviceSize.mobile),
  tablet: mediaQuery(deviceSize.tablet),
  laptop: mediaQuery(deviceSize.laptop),
  custom: mediaQuery,
};

export default media;
