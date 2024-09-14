import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartRateBulk = ({
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
      d="M11.684 11.052a1 1 0 0 1 1.265.632l1.75 5.254 1.547-4.639A1.9 1.9 0 0 1 18.049 11h2.95a1 1 0 1 1 0 2h-2.878l-2.046 6.136c-.44 1.322-2.31 1.322-2.75 0l-2.274-6.82a1 1 0 0 1 .633-1.264"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.924 4.865c.441-1.322 2.31-1.322 2.752 0l2.273 6.819a1 1 0 1 1-1.898.632L9.3 7.062l-1.546 4.639A1.9 1.9 0 0 1 5.95 13H3a1 1 0 1 1 0-2h2.88z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartRateBulk;
