import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteeringWheelSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 8.885a5.75 5.75 0 0 1 5.75-5.75h8A5.75 5.75 0 0 1 22 8.885v8a5.75 5.75 0 0 1-5.75 5.75h-8a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25A4.25 4.25 0 0 0 4 8.885v8a4.25 4.25 0 0 0 4.25 4.25h8a4.25 4.25 0 0 0 4.25-4.25v-8a4.25 4.25 0 0 0-4.25-4.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.207 10.76a.58.58 0 0 0-.434.194l-.604.672a.75.75 0 0 1-.558.25H6.596a.75.75 0 0 1 0-1.5h2.68l.38-.423.558.5-.558-.5c.395-.441.959-.693 1.55-.693h2.088c.592 0 1.156.252 1.551.693l.38.423h2.68a.75.75 0 1 1 0 1.5H14.89a.75.75 0 0 1-.558-.25l-.603-.672a.58.58 0 0 0-.435-.194z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.635a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m-6.75 5.25a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 13.09a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5m-1.75.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M9.295 15.676c.552.61.867 1.586.867 3.048a.75.75 0 0 0 1.5 0c0-1.638-.348-3.051-1.255-4.054-.92-1.018-2.288-1.473-4.008-1.473a.75.75 0 0 0 0 1.5c1.468 0 2.357.384 2.896.979M15.206 15.676c-.553.61-.867 1.586-.867 3.048a.75.75 0 0 1-1.5 0c0-1.638.347-3.051 1.254-4.054.921-1.018 2.289-1.473 4.009-1.473a.75.75 0 0 1 0 1.5c-1.469 0-2.358.384-2.896.979"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSteeringWheelSquareOutline;
