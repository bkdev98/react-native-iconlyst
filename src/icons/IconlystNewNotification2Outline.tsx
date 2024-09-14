import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotification2Outline = ({
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
      d="M3.926 4.534c.946-1.02 2.295-1.59 3.89-1.59h4.93a.75.75 0 0 1 0 1.5h-4.93c-1.223 0-2.157.427-2.79 1.11C4.388 6.243 4 7.253 4 8.508v7.564c0 1.26.381 2.267 1.014 2.951.626.678 1.559 1.106 2.802 1.106h8.05c1.224 0 2.158-.427 2.79-1.107.639-.687 1.027-1.694 1.027-2.95v-4.715a.75.75 0 0 1 1.5 0v4.715c0 1.564-.487 2.96-1.428 3.971-.946 1.018-2.295 1.586-3.89 1.586H7.816c-1.61 0-2.96-.566-3.903-1.587-.938-1.014-1.413-2.41-1.413-3.97V8.508c0-1.563.486-2.96 1.426-3.974"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.895 3.871a1.606 1.606 0 1 0 0 3.211 1.606 1.606 0 0 0 0-3.21m-3.106 1.606a3.106 3.106 0 1 1 6.211 0 3.106 3.106 0 0 1-6.21 0M11.836 9.866a2.666 2.666 0 1 0 0 5.332 2.666 2.666 0 0 0 0-5.332M7.67 12.532a4.166 4.166 0 1 1 8.332 0 4.166 4.166 0 0 1-8.332 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewNotification2Outline;
