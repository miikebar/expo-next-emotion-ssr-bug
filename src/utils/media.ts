import { Platform } from "react-native";

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export type Breakpoint = keyof typeof breakpoints;

export const media = (breakpoint: Breakpoint, props: any, styles: {}) => {
  if (Platform.OS === "web") {
    return {
      [`@media (min-width: ${breakpoints[breakpoint]}px)`]: styles,
    };
  }
  // On native extract current breakpoint from props / context / store
  return (
    breakpoints[props.currentBreakpoint as Breakpoint] >=
    breakpoints[breakpoint] && styles
  );
};
