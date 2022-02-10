import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg"

export const CalenderIconSVG = (props: SvgProps) => {
  return (
        <Svg
            width="19.000000pt" 
            height="20.000000pt" 
            viewBox="0 0 19.000000 20.000000"
            {...props}
            preserveAspectRatio="xMidYMid meet">
         <G transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
                 stroke="none">
          <Path d="M40 190 c0 -5 -9 -10 -20 -10 -19 0 -20 -7 -20 -90 l0 -91 93 3 92 3
            3 88 c3 81 1 87 -17 87 -11 0 -22 6 -25 13 -5 10 -7 10 -12 0 -7 -15 -74 -18
            -74 -3 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/>
        </G>
        </Svg>
  )
}