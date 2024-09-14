import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.848 12.314v3.745M10.76 14.187H6.937M15.366 12.428h-.107M17.18 16.003h-.107M8.072 2c0 .74.613 1.34 1.368 1.34h1.057c1.165.005 2.11.93 2.115 2.073V6.2M16.428 6.41c3.22 0 5.572 2.298 5.572 5.452v4.65c0 3.154-2.352 5.45-5.572 5.45q-4.506.077-8.855 0c-3.22 0-5.573-2.296-5.573-5.45v-4.65C2 8.707 4.354 6.41 7.573 6.41c1.631-.027 3.373-.04 5.027-.036"
    />
  </Svg>
);
export default IconlystGameBroken;
