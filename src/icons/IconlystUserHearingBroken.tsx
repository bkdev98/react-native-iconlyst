import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserHearingBroken = ({
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
      d="M5.892 20.001c0-2.109 1.663-4.733 6.458-4.733s6.458 2.605 6.458 4.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.525 8.123a4.126 4.126 0 1 1-8.252 0 4.126 4.126 0 0 1 8.252 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.202 5.615c.476.72.754 1.582.754 2.509s-.278 1.79-.754 2.509M5.599 5.615a4.53 4.53 0 0 0-.754 2.509c0 .927.277 1.79.754 2.509"
    />
  </Svg>
);
export default IconlystUserHearingBroken;
