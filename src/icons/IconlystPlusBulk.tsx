import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlusBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.667 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.062 3.92 22 7.333 22h9.334C20.07 22 22 20.062 22 16.667V7.333C22 3.93 20.071 2 16.667 2"
        opacity={0.4}
      />
      <Path d="M15.32 12.708h-2.57v2.549c0 .41-.336.743-.75.743a.746.746 0 0 1-.75-.743v-2.549H8.68a.753.753 0 0 1-.68-.747c0-.385.293-.707.68-.747h2.562v-2.54A.755.755 0 0 1 11.996 8c.388 0 .714.29.754.674v2.54h2.57c.387.04.68.362.68.747a.753.753 0 0 1-.68.747" />
    </G>
  </Svg>
);
export default IconlystPlusBulk;
