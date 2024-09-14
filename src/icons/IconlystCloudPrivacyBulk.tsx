import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudPrivacyBulk = ({
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
      d="M18.015 8.017a.21.21 0 0 1-.183-.18c-.294-2.107-2.009-4.74-5.33-4.74-3.571 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222c.44.178.84.27 1.173.318.121.018.22-.081.216-.204v-.06c0-.668-.009-1.154-.016-1.512-.02-1.062-.039-2.066.877-2.98.871-.875 3.752-1.71 4.518-1.71.771 0 3.66.839 4.533 1.724.902.908.883 1.862.863 2.967a72 72 0 0 0-.017 1.556c-.003.124.098.224.22.204a5.2 5.2 0 0 0 1.104-.306 4.64 4.64 0 0 0 2.715-4.22c0-2.482-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.692 15.304c-.007.372-.017.877-.017 1.574 0 1.475-1.545 2.24-2.13 2.477-.583-.237-2.13-1.002-2.13-2.477 0-.698-.01-1.202-.016-1.574a19 19 0 0 1-.006-.637c.49-.235 1.856-.708 2.122-.742.334.035 1.794.542 2.182.723.005.142 0 .385-.005.656m-2.146-2.878c-.507 0-2.866.779-3.283 1.198-.388.387-.382.746-.364 1.708.007.365.017.86.017 1.546 0 2.926 3.273 3.95 3.413 3.993a.76.76 0 0 0 .433 0c.14-.042 3.413-1.067 3.413-3.993 0-.685.01-1.18.017-1.546.018-.96.024-1.318-.36-1.704-.416-.422-2.777-1.202-3.286-1.202"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudPrivacyBulk;
