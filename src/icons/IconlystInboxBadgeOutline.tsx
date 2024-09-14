import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBadgeOutline = ({
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
      d="M4.355 4.838C5.31 3.81 6.672 3.234 8.278 3.234h5.326a.75.75 0 0 1 0 1.5H8.278c-1.233 0-2.181.433-2.825 1.126-.649.698-1.044 1.722-1.044 2.995v7.7c0 1.273.394 2.297 1.042 2.995.642.692 1.59 1.125 2.827 1.125h8.144c1.238 0 2.186-.433 2.828-1.125.648-.698 1.042-1.722 1.042-2.996V10.74a.75.75 0 0 1 1.5 0v5.814c0 1.582-.493 2.993-1.442 4.016-.956 1.03-2.318 1.605-3.928 1.605H8.278c-1.61 0-2.972-.575-3.927-1.605-.95-1.023-1.442-2.434-1.442-4.016v-7.7c0-1.582.495-2.993 1.446-4.016"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.125 4.113c-.864 0-1.568.704-1.568 1.576s.704 1.577 1.568 1.577 1.568-.704 1.568-1.577c0-.872-.704-1.576-1.568-1.576M16.057 5.69a3.07 3.07 0 0 1 3.068-3.076 3.07 3.07 0 0 1 3.068 3.076 3.07 3.07 0 0 1-3.068 3.077 3.07 3.07 0 0 1-3.068-3.077M2.922 13.139a.75.75 0 0 1 .75-.75h4.134c1.142 0 2.185.648 2.692 1.674a2.07 2.07 0 0 0 1.856 1.157 2.07 2.07 0 0 0 1.856-1.157 3 3 0 0 1 2.693-1.674h4.136a.75.75 0 0 1 0 1.5h-4.136c-.572 0-1.093.324-1.348.838a3.57 3.57 0 0 1-3.201 1.993 3.57 3.57 0 0 1-3.201-1.992 1.5 1.5 0 0 0-1.347-.84H3.672a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxBadgeOutline;
