import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceRocketLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.369 13.383-4.162 3.034c-.236.188-.518.429-.717.602a1.06 1.06 0 0 1-.6.256l-.984.087a1.05 1.05 0 0 1-.831-.301l-1.74-1.74a1.04 1.04 0 0 1-.306-.745l.007-1.098a1.06 1.06 0 0 1 .257-.684c.175-.204.407-.478.587-.703l3.035-4.162a10.87 10.87 0 0 1 8.489-4.08c.577 0 1.045.467 1.045 1.044 0 3.303-1.501 6.427-4.08 8.49"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.87 12.985v4.579c0 .396-.224.758-.578.935l-2.525 1.262a1.045 1.045 0 0 1-1.458-.604l-.664-1.992M7.14 12.66l-1.992-.663a1.045 1.045 0 0 1-.604-1.46l1.262-2.524c.177-.354.54-.577.935-.577h4.58M8.207 18.877c-.32 2.124-2.806 1.728-4.428 1.971.244-1.621-.139-4.094 1.986-4.414M15.379 7.732c.819-.247 1.465.428 1.318 1.318"
    />
  </Svg>
);
export default IconlystSpaceRocketLight;
