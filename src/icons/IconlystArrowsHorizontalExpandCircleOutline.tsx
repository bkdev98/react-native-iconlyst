import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalExpandCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.866 9.185a.75.75 0 0 1 0 1.06L8.86 11.25h6.279l-1.005-1.004a.75.75 0 0 1 1.061-1.06l2.285 2.284a.75.75 0 0 1 0 1.06l-2.285 2.285a.75.75 0 0 1-1.06-1.06l1.004-1.005H8.86l1.005 1.004a.75.75 0 0 1-1.061 1.06L6.52 12.53a.75.75 0 0 1 0-1.06l2.285-2.285a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsHorizontalExpandCircleOutline;
