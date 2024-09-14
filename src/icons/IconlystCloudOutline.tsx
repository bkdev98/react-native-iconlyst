import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudOutline = ({
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
      d="M8.152 6.808c.897-1.185 2.333-2.134 4.403-2.134s3.505.949 4.403 2.134a6.35 6.35 0 0 1 1.188 2.812c1.037.136 1.99.56 2.726 1.264.904.862 1.433 2.094 1.433 3.578a4.89 4.89 0 0 1-2.904 4.476 5.4 5.4 0 0 1-1.952.388H7.655a5.3 5.3 0 0 1-1.973-.406 4.89 4.89 0 0 1-2.877-4.458c0-1.484.529-2.716 1.433-3.578.737-.703 1.689-1.128 2.726-1.264a6.35 6.35 0 0 1 1.188-2.812m1.196.906c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.969.009-1.804.337-2.391.897-.58.554-.968 1.382-.968 2.493a3.39 3.39 0 0 0 1.982 3.085 3.8 3.8 0 0 0 1.368.279h9.794c.364 0 .867-.072 1.38-.275a3.39 3.39 0 0 0 1.976-3.089c0-1.112-.388-1.94-.968-2.493-.587-.56-1.422-.888-2.391-.897a.75.75 0 0 1-.743-.75c0-.658-.27-1.723-.941-2.608-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudOutline;
