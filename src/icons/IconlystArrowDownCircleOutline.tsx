import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0 1.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5m4.001 6.526a.75.75 0 0 1 .002 1.06l-3.472 3.487a.74.74 0 0 1-.413.212l-.118.009a.75.75 0 0 1-.531-.221l-3.471-3.486a.75.75 0 1 1 1.063-1.06L12 12.983l2.94-2.954a.75.75 0 0 1 1.061-.002"
    />
  </Svg>
);
export default IconlystArrowDownCircleOutline;
