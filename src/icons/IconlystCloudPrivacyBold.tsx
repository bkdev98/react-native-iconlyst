import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudPrivacyBold = ({
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
      d="M17.515 8.017a.21.21 0 0 1-.183-.18c-.294-2.107-2.009-4.74-5.33-4.74-3.571 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222c.44.178.84.27 1.173.318.121.018.22-.081.216-.204v-.06c0-.668-.009-1.154-.016-1.512-.02-1.062-.039-2.066.877-2.98.871-.875 3.752-1.71 4.518-1.71.771 0 3.66.839 4.533 1.724.902.908.883 1.862.863 2.967a72 72 0 0 0-.017 1.556c-.003.124.098.224.22.204a5.2 5.2 0 0 0 1.104-.306 4.64 4.64 0 0 0 2.715-4.22c0-2.482-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.192 15.304c-.007.371-.017.876-.017 1.574 0 1.474-1.545 2.24-2.13 2.477-.583-.238-2.13-1.003-2.13-2.477 0-.698-.01-1.203-.016-1.575a19 19 0 0 1-.006-.637c.49-.235 1.856-.707 2.122-.742.334.036 1.794.543 2.182.724.005.142 0 .385-.005.656m-2.146-2.879c-.507 0-2.866.78-3.283 1.198-.388.388-.382.747-.364 1.709.007.364.017.86.017 1.546 0 2.925 3.273 3.95 3.413 3.992a.76.76 0 0 0 .433 0c.14-.042 3.413-1.067 3.413-3.992 0-.686.01-1.18.017-1.546.018-.96.024-1.319-.36-1.705-.416-.421-2.777-1.202-3.286-1.202"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudPrivacyBold;
