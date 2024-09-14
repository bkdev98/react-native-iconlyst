import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshLight = ({
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
      d="M7.121 4.523a2.58 2.58 0 0 0-2.58 2.58v1.972c0 .961.382 1.883 1.062 2.563L9.8 15.374c.277.277.433.654.433 1.046v3.1a1.48 1.48 0 0 0 2.027 1.374l1.808-.72a1.48 1.48 0 0 0 .933-1.375v-1.912c0-.418.177-.818.488-1.098l4.734-4.682a3.63 3.63 0 0 0 1.197-2.692V7.104a2.58 2.58 0 0 0-2.58-2.58"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.662 7.477a2.95 2.95 0 1 1 .112-2.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.14 4.624h1.633V3"
    />
  </Svg>
);
export default IconlystFilterRefreshLight;
