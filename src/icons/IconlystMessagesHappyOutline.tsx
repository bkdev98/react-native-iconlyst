import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesHappyOutline = ({
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
      d="M8.393 13.46a.75.75 0 0 1 .988.386 2.895 2.895 0 0 0 5.3 0 .75.75 0 1 1 1.374.601 4.395 4.395 0 0 1-8.049 0 .75.75 0 0 1 .387-.987"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.225 22.391a9.7 9.7 0 0 1-4.069-.893 3.3 3.3 0 0 0-.982-.3c-.36.04-.715.13-1.05.267-.766.264-1.814.625-2.57-.135s-.412-1.76-.137-2.565c.139-.342.228-.703.264-1.07a3.3 3.3 0 0 0-.3-1 9.83 9.83 0 0 1 1.968-11 9.734 9.734 0 0 1 13.79 0 9.776 9.776 0 0 1-6.916 16.69zm-5.054-2.69a4.2 4.2 0 0 1 1.563.413l.036.015a8.276 8.276 0 0 0 7.047-14.974 8.3 8.3 0 0 0-3.572-.817A8.18 8.18 0 0 0 6.413 6.76a8.345 8.345 0 0 0-1.654 9.347c.242.499.385 1.04.421 1.592a5 5 0 0 1-.344 1.552c-.1.278-.316.93-.22 1.025.096.096.74-.13 1.017-.225a4.9 4.9 0 0 1 1.538-.344z"
    />
  </Svg>
);
export default IconlystMessagesHappyOutline;
