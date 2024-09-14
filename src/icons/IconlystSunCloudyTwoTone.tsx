import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCloudyTwoTone = ({
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
      d="M15.23 19a5.885 5.885 0 1 0-5.647-7.55A3.912 3.912 0 1 0 8.141 19z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.146 4.997.005.02m4.192.68-.009.015m-7.63 1.776-.034-.021m-.686 4.218.026-.006M11.305 8.648a3.298 3.298 0 0 0-5.695 3.326"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunCloudyTwoTone;
