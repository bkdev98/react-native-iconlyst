import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.939 21.65v-19H12c5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.939 2.65c-5.21.033-9.439 4.283-9.439 9.5 0 5.218 4.229 9.467 9.439 9.5z"
    />
  </Svg>
);
export default IconlystCircleBulk;
