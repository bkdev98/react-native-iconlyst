import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReceiveLight = ({
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
      d="M21 10.594v-1.68C21 6.15 19.155 3.9 16.418 3.9H7.582C4.845 3.9 3 6.15 3 8.913v6.181c0 2.765 1.845 5.013 4.582 5.006h4.336M17.876 14.691l-2.571 2.562 2.571 2.561M15.305 17.253H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.31 9.166-3.998 3.252a2.07 2.07 0 0 1-2.574 0L6.705 9.166"
    />
  </Svg>
);
export default IconlystEmailReceiveLight;
