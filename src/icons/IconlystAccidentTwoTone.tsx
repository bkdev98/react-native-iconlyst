import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAccidentTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.992 18.331q-.003.248.064.486a1.798 1.798 0 0 0 3.464 0 1.7 1.7 0 0 0 .072-.486 1.8 1.8 0 0 0-1.8-1.8 1.8 1.8 0 0 0-1.8 1.8M21.5 8.656h-.82a1.1 1.1 0 0 0-.962.576l-2.034 3.78M19.826 18.332H21.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 13.057h-5.517a2.01 2.01 0 0 0-2.006 2.006v1.557a2.007 2.007 0 0 0 2.006 2.007v0M9.008 18.331q0 .249-.072.486a1.8 1.8 0 0 1-3.465 0 1.7 1.7 0 0 1-.063-.486 1.801 1.801 0 0 1 3.073-1.273c.338.337.527.796.527 1.273M3.5 8.656h.81a1.1 1.1 0 0 1 .963.576l2.043 3.78M5.174 18.332H3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 13.057h5.517a2.01 2.01 0 0 1 2.007 2.006v1.557a2.007 2.007 0 0 1-2.007 2.007v0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.132 10.33 7.783 8.838l1.9-.819-1.027-2.763 2.655 1.476 1.548-2.862 1.053 3.303 3.186-.504-1.81 4.005M12.644 11.357l-.171-2.052"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAccidentTwoTone;
