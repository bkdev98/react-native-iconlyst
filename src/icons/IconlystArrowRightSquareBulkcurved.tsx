import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBulkcurved = ({
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
      d="M12.25 2.25C5.051 2.25 2.5 4.802 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.571 16.498a.74.74 0 0 0 .416-.127c1.233-.826 4.103-2.905 4.103-4.371s-2.869-3.548-4.102-4.375a.75.75 0 1 0-.836 1.246c1.167.782 2.28 1.71 2.91 2.379H8.16a.75.75 0 0 0 0 1.5h6.9c-.625.668-1.725 1.583-2.907 2.375a.748.748 0 0 0 .418 1.373"
    />
  </Svg>
);
export default IconlystArrowRightSquareBulkcurved;
