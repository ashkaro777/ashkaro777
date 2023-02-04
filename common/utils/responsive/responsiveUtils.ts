import { DEVICE_BREAKPOINT } from "./constants";

const customSmallerThanMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const customLargerThanMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const screenSmallerThan = {
  custom: customSmallerThanMediaQuery,
  fullhd: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.fullhd),
  widescreen: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.widescreen),
  desktop: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.desktop),
  smallMonitor: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.smallMonitor),
  tablet: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.tablet),
  mobile: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.mobile),
  smallMobile: customSmallerThanMediaQuery(DEVICE_BREAKPOINT.smallMobile),
};

export const screenLargerThan = {
  custom: customLargerThanMediaQuery,
  fullhd: customLargerThanMediaQuery(DEVICE_BREAKPOINT.fullhd),
  widescreen: customLargerThanMediaQuery(DEVICE_BREAKPOINT.widescreen),
  desktop: customLargerThanMediaQuery(DEVICE_BREAKPOINT.desktop),
  smallMonitor: customLargerThanMediaQuery(DEVICE_BREAKPOINT.smallMonitor),
  tablet: customLargerThanMediaQuery(DEVICE_BREAKPOINT.tablet),
  mobile: customLargerThanMediaQuery(DEVICE_BREAKPOINT.mobile),
  smallMobile: customLargerThanMediaQuery(DEVICE_BREAKPOINT.smallMobile),
};

export const getViewPortHeightCssString = (percent: number = 100) =>
  `calc(${percent} * var(--vh, 1vh))`;
export const getViewPortWidthCssString = (percent: number = 100) =>
  `calc(${percent} * var(--vw, 1vw))`;
