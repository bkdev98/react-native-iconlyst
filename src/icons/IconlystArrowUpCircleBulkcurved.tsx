import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpCircleBulkcurved = ({
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
      d="M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.199 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.101 13.867a.75.75 0 0 0 1.236-.848c-.975-1.424-2.804-3.812-4.088-3.812-1.283 0-3.112 2.388-4.087 3.812a.748.748 0 0 0 .617 1.174.75.75 0 0 0 .62-.326c1.087-1.587 2.433-3.065 2.82-3.162.446.097 1.793 1.575 2.882 3.162"
    />
  </Svg>
);
export default IconlystArrowUpCircleBulkcurved;
