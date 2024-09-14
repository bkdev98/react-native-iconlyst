import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5c5.24 0 9.5-4.262 9.5-9.5s-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.665 15.463a.75.75 0 0 0 .75-.75V9.285a.75.75 0 0 0-1.5 0v5.428c0 .414.336.75.75.75M10.476 15.463a.75.75 0 0 0 .75-.75V9.285a.75.75 0 0 0-1.5 0v5.428c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystPauseCircleBulk;
