import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleBulkcurved = ({
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
      d="M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.437 12.75h6.903a.75.75 0 0 0 0-1.5h-6.9c.625-.668 1.725-1.583 2.907-2.375a.75.75 0 1 0-.834-1.246C10.28 8.455 7.41 10.534 7.41 12s2.868 3.548 4.102 4.375a.749.749 0 1 0 .836-1.246c-1.167-.783-2.28-1.712-2.91-2.379"
    />
  </Svg>
);
export default IconlystArrowLeftCircleBulkcurved;
