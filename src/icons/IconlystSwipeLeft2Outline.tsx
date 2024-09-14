import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeft2Outline = ({
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
      d="M6.975 3.688a2.4 2.4 0 0 1 3.063 1.4l1.279 3.353.185-.053c.915-.26 1.994-.567 3.013-.671 1.387-.142 2.902.057 4.001 1.353.992 1.168 1.543 2.701 1.721 4.2.179 1.495-.004 3.036-.567 4.245-.75 1.605-2.646 2.916-4.58 3.624-1.924.704-4.225.935-5.83-.038-1.75-1.058-3.33-2.523-4.499-3.92-.882-1.054-.694-2.575.306-3.443l.486.56-.486-.56a2.55 2.55 0 0 1 2.897-.315L5.54 6.764a2.4 2.4 0 0 1 1.435-3.076m1.661 1.935a.9.9 0 0 0-1.686.628l3.237 8.894a.75.75 0 0 1-1.14.868l-1.694-1.206a1.054 1.054 0 0 0-1.302.063c-.421.366-.465.96-.14 1.35 1.084 1.294 2.544 2.64 4.125 3.598 1.018.617 2.76.563 4.538-.088 1.767-.647 3.23-1.762 3.736-2.85.42-.901.59-2.15.438-3.433-.153-1.28-.617-2.513-1.375-3.407-.64-.753-1.546-.95-2.705-.831-.876.09-1.761.341-2.645.592a45 45 0 0 1-.976.27.75.75 0 0 1-.889-.46z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.141 2.397a.75.75 0 0 1 .158 1.049l-.813 1.1 1.1.812a.75.75 0 0 1-.891 1.206l-1.703-1.258a.75.75 0 0 1-.158-1.049l1.258-1.703a.75.75 0 0 1 1.049-.157"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.475 5.91c-1.53-1.079-3.521-1.071-5.853-.48a.75.75 0 0 1-.369-1.453c2.459-.625 5.007-.76 7.087.707a.75.75 0 0 1-.865 1.226"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeLeft2Outline;
