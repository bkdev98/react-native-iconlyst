import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraRemoveOutline = ({
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
      d="M19.752 3.26a.75.75 0 0 1 .03 1.06L4.175 20.83a.75.75 0 0 1-1.09-1.03L18.692 3.29a.75.75 0 0 1 1.06-.03M19.604 6.87a.75.75 0 0 1 1.057-.094A3.74 3.74 0 0 1 22 9.658V15.3a4.857 4.857 0 0 1-4.857 4.856H8.776a.75.75 0 0 1 0-1.5h8.368A3.357 3.357 0 0 0 20.5 15.3V9.658c0-.705-.314-1.324-.801-1.731a.75.75 0 0 1-.095-1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.004 5.21c-.258.467-.593 1.03-.826 1.3l-.024.028a2.63 2.63 0 0 1-1.84.818A2.31 2.31 0 0 0 4 9.662v5.643c0 1.176.603 2.208 1.525 2.805a.75.75 0 0 1-.814 1.26A4.83 4.83 0 0 1 2.5 15.304V9.662c0-2.094 1.7-3.796 3.797-3.805.286-.015.556-.134.754-.336.122-.15.381-.566.64-1.038l.004-.005a2.99 2.99 0 0 1 2.61-1.54h3.91c1.109 0 2.109.613 2.627 1.581.123.228.25.454.364.643.12.195.2.31.238.354a.75.75 0 0 1-.802 1.267 1.3 1.3 0 0 1-.321-.273 4 4 0 0 1-.397-.57c-.133-.22-.273-.47-.402-.708l-.003-.005a1.48 1.48 0 0 0-1.303-.79h-3.912c-.536 0-1.03.293-1.3.773"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 10.313a2.346 2.346 0 0 0-2.344 2.344c0 .394.097.77.265 1.092a.75.75 0 1 1-1.33.695 3.9 3.9 0 0 1-.435-1.787 3.846 3.846 0 0 1 3.844-3.844c.566 0 1.105.12 1.597.354a.75.75 0 0 1-.644 1.355 2.2 2.2 0 0 0-.953-.21M15.342 11.906a.75.75 0 0 1 .75.75 3.843 3.843 0 0 1-3.843 3.843.75.75 0 0 1 0-1.5 2.343 2.343 0 0 0 2.343-2.343.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraRemoveOutline;
