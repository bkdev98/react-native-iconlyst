import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReduxOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.691 8.832a.763.763 0 1 0 0 1.525.763.763 0 0 0 0-1.525m-2.262.763a2.263 2.263 0 1 1 4.525 0 2.263 2.263 0 0 1-4.525 0M8.47 14.902a.763.763 0 1 0 0 1.525.763.763 0 0 0 0-1.525m-2.262.763a2.263 2.263 0 1 1 4.525 0 2.263 2.263 0 0 1-4.525 0M15.389 14.527a.763.763 0 1 0 0 1.525.763.763 0 0 0 0-1.525m-2.263.763a2.262 2.262 0 1 1 4.525 0 2.262 2.262 0 0 1-4.525 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.576 11.924a.75.75 0 0 1-.002 1.06c-1.772 1.765-2.232 3.816-1.46 5.154.502.87 1.499 1.433 2.83 1.55 1.33.114 2.921-.23 4.435-1.105l.005-.003a8.2 8.2 0 0 0 2.647-2.39.75.75 0 0 1 1.223.87 9.7 9.7 0 0 1-3.127 2.824c-1.747 1.008-3.642 1.442-5.312 1.297-1.668-.144-3.185-.882-4-2.293-1.264-2.19-.298-4.977 1.7-6.966a.75.75 0 0 1 1.061.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.815 5.107c.96-1.373 2.357-2.318 3.986-2.318 2.65 0 4.639 2.44 5.28 5.36a.75.75 0 1 1-1.464.321c-.575-2.611-2.198-4.18-3.816-4.18-1.004 0-1.99.58-2.757 1.676-.764 1.094-1.26 2.644-1.26 4.392v.005a8.1 8.1 0 0 0 .805 3.57.75.75 0 1 1-1.35.652 9.6 9.6 0 0 1-.956-4.229c0-2.017.571-3.875 1.532-5.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.47 9.712a.75.75 0 0 1 .809-.686 9.66 9.66 0 0 1 4.112 1.302c1.746 1.01 3.07 2.432 3.78 3.951.708 1.517.828 3.2.014 4.61-1.298 2.25-4.314 2.777-7.107 1.948a.75.75 0 0 1 .426-1.438c2.49.739 4.589.114 5.382-1.26.502-.869.492-2.014-.074-3.225-.565-1.209-1.66-2.414-3.174-3.288l-.005-.003a8.16 8.16 0 0 0-3.476-1.102.75.75 0 0 1-.687-.809"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReduxOutline;
