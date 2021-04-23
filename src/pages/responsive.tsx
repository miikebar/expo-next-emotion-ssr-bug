import {ScrollView, View} from "react-native";
import React, {useState} from "react";
import {Breakpoint} from "../utils/media";
import {ResponsiveBox} from "../components/ResponsiveBox";
import {useDimensions} from "@react-native-community/hooks";

export default function Responsive() {
  // Mock implementation of breakpoint detection
  // for native platform. Web uses media queries
  const width = useDimensions().screen.width
  const breakpoint: Breakpoint = width < 576 ? 'sm' : 'md'

  return (
    <ScrollView>
      <ResponsiveBox currentBreakpoint={breakpoint}/>
      <ResponsiveBox currentBreakpoint={breakpoint}/>
      <ResponsiveBox currentBreakpoint={breakpoint}/>
      <ResponsiveBox currentBreakpoint={breakpoint}/>
      <ResponsiveBox currentBreakpoint={breakpoint}/>
    </ScrollView>
  )
}
