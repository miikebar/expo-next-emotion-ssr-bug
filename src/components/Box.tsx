import styled from '@emotion/native'
import {View} from 'react-native'

type PlacementAbbr = '' | 't' | 'r' | 'b' | 'l' | 'x' | 'y'
type MarginAbbr = `m${PlacementAbbr}`
type PaddingAbbr = `p${PlacementAbbr}`

type BoxProps = Partial<Record<MarginAbbr, number>> &
  Partial<Record<PaddingAbbr, number>> & {
  bgColor?: string
  width?: number
  height?: number
}

export const Box = styled(View)<BoxProps>({}, (props) => ({
  marginHorizontal: props.mx,
  marginVertical: props.my,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  paddingHorizontal: props.px,
  paddingVertical: props.py,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  backgroundColor: props.bgColor,
  width: props.width,
  height: props.height,
}))
