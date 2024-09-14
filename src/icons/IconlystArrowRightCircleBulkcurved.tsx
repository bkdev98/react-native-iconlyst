import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightCircleBulkcurved = ({
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
      d="M10.811 16.22a.75.75 0 0 0 .424-.131c1.421-.977 3.805-2.807 3.805-4.09s-2.384-3.112-3.805-4.088a.75.75 0 0 0-.85 1.237c1.584 1.088 3.06 2.435 3.157 2.82-.097.447-1.573 1.795-3.157 2.885a.751.751 0 0 0 .426 1.368"
    />
  </Svg>
);
export default IconlystArrowRightCircleBulkcurved;
