import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotLight = ({
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
      d="M5.678 17.372a8.996 8.996 0 0 1 0-12.723M8.126 13.864a4.49 4.49 0 0 1 .301-6.033"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.395 11.01a1.351 1.351 0 1 1-2.702 0 1.351 1.351 0 0 1 2.702 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.664 7.83c1.65 1.65 1.744 4.261.302 6.033M18.408 4.648a8.996 8.996 0 0 1 0 12.723M14.72 19.352l-2.677-6.994-2.678 6.994"
    />
  </Svg>
);
export default IconlystHotspotLight;
