import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.832 15.729a.75.75 0 0 0 .75-.75v-3.09c0-1.698-1.38-3.08-3.076-3.08a3.08 3.08 0 0 0-3.076 3.08v3.09a.75.75 0 0 0 1.5 0v-3.09c0-.871.707-1.58 1.576-1.58a1.58 1.58 0 0 1 1.576 1.58v3.09c0 .414.336.75.75.75M7.385 9.04c0 .414.371.779.785.779s.786-.365.786-.779-.372-.79-.786-.79-.785.375-.785.79M8.168 15.729a.75.75 0 0 0 .75-.75v-3.41a.75.75 0 0 0-1.5 0v3.41c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystLinkedinBulk;
