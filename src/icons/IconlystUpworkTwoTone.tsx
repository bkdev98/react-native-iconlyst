import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpworkTwoTone = ({
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
      strokeWidth={1.5}
      d="M9.75 5.25c1.125 2.813 3.237 9 7.313 9 2.144 0 3.937-1.793 3.937-3.937s-1.793-3.938-3.937-3.938c-2.28 0-3.63 1.688-3.938 3.375-.272 1.496-1.687 9-1.687 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 5.25v5.625c0 1.838 1.537 3.375 3.375 3.375s3.375-1.537 3.375-3.375V5.25"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUpworkTwoTone;
