import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M8.848 12.314v3.745M10.759 14.187H6.938M15.366 12.428h-.107M17.18 16.003h-.107" />
      <Path
        d="M8.072 2c0 .74.613 1.34 1.368 1.34h1.057c1.165.005 2.11.93 2.115 2.073v.675"
        opacity={0.4}
      />
      <Path d="M16.428 21.963q-4.506.073-8.855 0C4.353 21.963 2 19.666 2 16.51v-4.65c0-3.154 2.354-5.45 5.573-5.45q4.374-.075 8.855 0c3.22 0 5.572 2.297 5.572 5.45v4.65c0 3.155-2.352 5.452-5.572 5.452" />
    </G>
  </Svg>
);
export default IconlystGameTwoTone;
