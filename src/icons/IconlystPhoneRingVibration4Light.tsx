import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration4Light = ({
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
      d="m16.398 18.593 3.108-9.808a3.277 3.277 0 0 0-2.134-4.114L12.96 3.273a3.28 3.28 0 0 0-4.114 2.134l-3.108 9.807a3.277 3.277 0 0 0 2.134 4.114l4.411 1.398a3.277 3.277 0 0 0 4.115-2.133"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.164 6.958-1.543 4.87M21.621 12.174l-1.543 4.87M11.145 16.783v-.048m0-.254a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneRingVibration4Light;