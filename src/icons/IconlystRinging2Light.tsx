import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging2Light = ({
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
      d="M5.608 9.869a6.393 6.393 0 0 1 12.785 0l.001 1.283c0 .76.169 1.509.492 2.196l.453.964c.694 1.475-.381 3.169-2.01 3.169H6.673c-1.628 0-2.704-1.694-2.01-3.169l.454-.964c.323-.687.49-1.436.49-2.196z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.98 17.982a3.018 3.018 0 0 0 6.035 0M4.068 5.777A7.6 7.6 0 0 1 6.287 3M19.933 5.777A7.6 7.6 0 0 0 17.715 3"
    />
  </Svg>
);
export default IconlystRinging2Light;
