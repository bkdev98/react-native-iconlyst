import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightCircleOutline = ({
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
      d="M12 21.75c-5.384 0-9.75-4.365-9.75-9.75S6.616 2.25 12 2.25s9.75 4.365 9.75 9.75-4.366 9.75-9.75 9.75M3.75 12a8.25 8.25 0 1 0 16.5 0 8.25 8.25 0 0 0-16.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.26 7.831a.75.75 0 0 1 .781.063l4.8 3.5a.75.75 0 0 1 0 1.212l-4.8 3.5A.75.75 0 0 1 9.85 15.5v-7a.75.75 0 0 1 .41-.669m1.09 2.144v4.05L14.127 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightCircleOutline;
