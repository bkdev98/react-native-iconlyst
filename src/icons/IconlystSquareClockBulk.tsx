import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareClockBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.094 12.75a.75.75 0 1 1 0-1.5h1.676a.3.3 0 0 0 .3-.3V8.03c0-3.308-2.123-5.53-5.284-5.53H13.62a.3.3 0 0 0-.3.3v1.68a.75.75 0 0 1-1.5 0V2.8a.3.3 0 0 0-.3-.3H8.352c-3.16 0-5.282 2.222-5.282 5.53v2.92a.3.3 0 0 0 .3.3h1.676a.75.75 0 0 1 0 1.5H3.37a.3.3 0 0 0-.3.3v2.92c0 3.308 2.122 5.53 5.282 5.53h3.168a.3.3 0 0 0 .3-.3v-1.68a.75.75 0 0 1 1.5 0v1.68a.3.3 0 0 0 .3.3h3.165c3.161 0 5.285-2.222 5.285-5.53v-2.92a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.511 14.344a.75.75 0 0 1-1.028.26l-3.3-1.97a.75.75 0 0 1-.365-.644V7.75a.75.75 0 0 1 1.5 0v3.644a.3.3 0 0 0 .146.257l2.787 1.665a.75.75 0 0 1 .26 1.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareClockBulk;
