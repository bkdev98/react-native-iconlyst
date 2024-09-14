import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseErrorBroken = ({
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
      d="M11.748 2.766c-4.151 0-7.516 1.357-7.516 3.031S7.597 8.83 11.748 8.83s7.515-1.357 7.515-3.032c0-1.17-1.643-2.185-4.048-2.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.877 14.777v2.994M16.886 20.7l.001.062M4.232 15.113v2.545s0 2.98 7.526 2.98M19.264 11.7V5.742M4.232 5.742V11.7s0 2.979 7.526 2.979"
    />
  </Svg>
);
export default IconlystDatabaseErrorBroken;
