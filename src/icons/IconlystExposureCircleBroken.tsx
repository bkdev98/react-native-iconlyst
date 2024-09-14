import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureCircleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.999 7.875 5.573 18.3M18.428 5.7A8.97 8.97 0 0 1 21 12a9 9 0 0 1-4.288 7.67M12 21a8.97 8.97 0 0 1-6.427-2.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.427 5.702a9 9 0 0 0-12.855 12.6M8.699 7.361v3.46M10.429 9.09h-3.46M16.523 15.183h-3.46"
    />
  </Svg>
);
export default IconlystExposureCircleBroken;
