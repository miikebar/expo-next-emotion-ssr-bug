import { styled } from "../lib/emotion/emotion";
import { View } from "react-native";
import { Breakpoint, media } from "../utils/media";

export const ResponsiveBox = styled(View)<{ currentBreakpoint?: Breakpoint }>(
  {
    width: 200,
    height: 200,
    marginBottom: 16,
    backgroundColor: "red",
  },
  (props) => ({
    ...media("md", props, {
      borderWidth: 10,
      borderColor: "blue",
    }),
  })
);
