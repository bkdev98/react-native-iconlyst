import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureCircleLight = ({
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
      d="M18.428 5.7 5.573 18.298M18.428 5.7A8.97 8.97 0 0 1 21 11.998a9 9 0 0 1-9 9 8.97 8.97 0 0 1-6.427-2.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.427 5.7A9 9 0 0 0 5.572 18.3M8.7 7.36v3.458M10.429 9.092h-3.46M16.522 15.182h-3.458"
    />
  </Svg>
);
export default IconlystExposureCircleLight;
