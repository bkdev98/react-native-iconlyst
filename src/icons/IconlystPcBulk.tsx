import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPcBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      fill={props.color}
      fillRule="evenodd"
      d="M11 16.9a.3.3 0 0 0 .3-.3v-5.002A4.204 4.204 0 0 1 15.5 7.4h3.3q.185 0 .362.034c.213.04.438-.106.438-.323V6.7a1 1 0 0 0-.008-.088C19.249 4.667 17.447 3.2 15.4 3.2H6.8a4.305 4.305 0 0 0-4.3 4.3v5.1a4.306 4.306 0 0 0 4.3 4.3h1.443l-.381 2.35H5.86a.75.75 0 0 0 0 1.5h4.9a.75.75 0 0 0 0-1.5H9.38l.382-2.35z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.191 18.456a.761.761 0 1 1 .001-1.522.761.761 0 0 1 0 1.522m1.61-9.556h-3.3c-1.465 0-2.7 1.236-2.7 2.7v6.5c0 1.488 1.21 2.7 2.7 2.7h3.3c1.488 0 2.7-1.212 2.7-2.7v-6.5c0-1.464-1.237-2.7-2.7-2.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPcBulk;
