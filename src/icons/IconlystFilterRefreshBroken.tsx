import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.371 4.523a2.58 2.58 0 0 0-2.58 2.58v1.972c0 .961.382 1.883 1.062 2.563l4.197 3.736c.277.277.433.654.433 1.046v3.1a1.48 1.48 0 0 0 2.027 1.374l1.808-.72a1.48 1.48 0 0 0 .933-1.375v-1.912c0-.418.177-.818.488-1.098M18.091 4.523a2.58 2.58 0 0 1 2.58 2.58v1.312a3.63 3.63 0 0 1-1.197 2.692l-2.368 2.34M14.912 7.477a2.95 2.95 0 1 1 .112-2.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.39 4.624h1.633V3"
    />
  </Svg>
);
export default IconlystFilterRefreshBroken;
