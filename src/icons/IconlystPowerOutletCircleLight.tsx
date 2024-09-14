import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletCircleLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.364 5.773A9 9 0 1 1 5.636 18.5 9 9 0 0 1 18.364 5.773"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.383a3.23 3.23 0 0 1-3.229-3.228V11.14a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.23 3.23 0 0 1-3.229 3.228M12 16.388v4.749M10.316 10.5V8.659m3.368 1.841V8.659"
    />
  </Svg>
);
export default IconlystPowerOutletCircleLight;
