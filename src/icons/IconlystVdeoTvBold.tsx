import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVdeoTvBold = ({
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
      d="M17.329 19.463h-8.99a.75.75 0 0 0 0 1.5h8.99a.75.75 0 0 0 0-1.5M12.276 8.597a.6.6 0 0 0-.202-.044.3.3 0 0 0-.13.03c-.08.047-.109.155-.12.238-.104.927-.104 1.926.002 2.955.007.05.033.17.111.217.073.046.206.036.355-.02a7.4 7.4 0 0 0 2.106-1.324c.09-.085.197-.216.196-.364 0-.147-.107-.275-.197-.357a7.2 7.2 0 0 0-2.12-1.331"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.41 11.754-.007.007a8.9 8.9 0 0 1-2.56 1.606 2.2 2.2 0 0 1-.787.154c-.319 0-.622-.08-.89-.242-.462-.276-.756-.75-.83-1.334a15.6 15.6 0 0 1-.001-3.307c.079-.602.382-1.077.856-1.353.485-.28 1.088-.307 1.655-.077.959.395 1.82.936 2.561 1.61.442.402.686.92.688 1.462s-.242 1.066-.685 1.474m2.396-8.723H7.862a4.535 4.535 0 0 0-4.528 4.531v5.45a4.534 4.534 0 0 0 4.528 4.53h9.944a4.534 4.534 0 0 0 4.528-4.53v-5.45a4.535 4.535 0 0 0-4.528-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVdeoTvBold;
