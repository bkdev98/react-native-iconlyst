import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoxRefreshRightOutline = ({
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
      d="M10.47 12.44a.75.75 0 0 0 0 1.062l2.47 2.47-2.47 2.469a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 11A3.75 3.75 0 0 1 7 7.25h10A3.75 3.75 0 0 1 20.75 11v2.5a.75.75 0 0 1-1.5 0V11A2.25 2.25 0 0 0 17 8.75H7A2.25 2.25 0 0 0 4.75 11v2A2.25 2.25 0 0 0 7 15.25h6.685a.75.75 0 1 1 0 1.5H7A3.75 3.75 0 0 1 3.25 13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoxRefreshRightOutline;
