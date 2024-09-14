import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop2Outline = ({
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
      d="M3.465 2.302a.75.75 0 0 1 .406-.041l2.075.36c.337.06.591.34.62.68l.962 11.44c.043.55.5.97 1.047.96h11.881c.414 0 .75.34.75.75 0 .42-.336.75-.75.75H8.577a2.54 2.54 0 0 1-2.545-2.33L5.12 4l-1.505-.26a.753.753 0 0 1-.15-1.439"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.372 2.25q.025 0 .05.002l.703-.002c1 0 1.866.35 2.48 1.01.61.65.913 1.54.916 2.5l.01 4.39c.002.96-.298 1.85-.904 2.5-.612.66-1.477 1.02-2.474 1.02l-4.65.02c-1 0-1.867-.36-2.48-1.01-.61-.66-.915-1.54-.917-2.51l-.01-4.38c-.002-.97.3-1.85.906-2.51.612-.66 1.476-1.02 2.472-1.02h.768l3.078-.008zm-.746 1.504-1.633.003.003 2.434.59-.19a.75.75 0 0 1 .466 0l.579.188zm-3.133.007h-.015c-.625 0-1.077.22-1.376.54-.305.33-.508.83-.506 1.49l.01 4.38c.001.406.079.748.21 1.028q.124.26.301.451c.3.32.753.54 1.381.54l4.65-.02c.628 0 1.08-.21 1.38-.54.303-.32.504-.82.503-1.48l-.01-4.38c-.002-.66-.206-1.16-.512-1.49-.299-.32-.751-.53-1.38-.53l.005 3.47a.73.73 0 0 1-.31.6.71.71 0 0 1-.673.11l-1.328-.433-1.34.443a.8.8 0 0 1-.357.028.7.7 0 0 1-.318-.127.77.77 0 0 1-.31-.61z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.124 19.19a1.281 1.281 0 0 1 .008 2.56 1.28 1.28 0 0 1-.008-2.56M19.44 19.19c.71 0 1.281.57 1.284 1.28a1.28 1.28 0 1 1-1.284-1.28"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop2Outline;
