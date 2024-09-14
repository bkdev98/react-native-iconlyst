import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeSquareBulkcurved = ({
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
      d="M12.25 2.25C5.051 2.25 2.5 4.801 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.639 14.767a.75.75 0 0 0 .385-1.394l-3.025-1.804V7.633a.75.75 0 0 0-1.5 0v4.362a.75.75 0 0 0 .366.644l3.391 2.023c.12.07.253.105.383.105"
    />
  </Svg>
);
export default IconlystTimeSquareBulkcurved;
