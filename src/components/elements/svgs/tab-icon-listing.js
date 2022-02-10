import * as React from "react"
import Svg, { SvgProps, Path, G } from "react-native-svg"

export const ListingIcon = (props: SvgProps) => {
  return (
    <Svg
        width="25.000000pt" 
        height="25.000000pt" 
        viewBox="0 0 30.000000 31.000000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        >
     <G transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)"
         stroke="none">
        <Path d="M0 160 l0 -150 90 0 90 0 0 90 0 90 45 0 45 0 0 -91 c0 -68 3 -90 12
        -86 9 2 13 32 13 103 l0 99 -57 3 -58 3 0 44 0 45 -90 0 -90 0 0 -150z"/>
    </G>
   </Svg>

  )
}