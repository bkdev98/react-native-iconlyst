import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRecordCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.571 15.448a3.454 3.454 0 0 1-3.45-3.45 3.454 3.454 0 0 1 3.45-3.45 3.454 3.454 0 0 1 3.45 3.45 3.454 3.454 0 0 1-3.45 3.45m-1.95-3.45c0-1.075.875-1.95 1.95-1.95s1.95.875 1.95 1.95-.875 1.95-1.95 1.95a1.953 1.953 0 0 1-1.95-1.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRecordCircleBulk;
