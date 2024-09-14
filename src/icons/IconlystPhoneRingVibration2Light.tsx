import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration2Light = ({
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
      d="M17.995 16.966V7.034a3.34 3.34 0 0 0-3.34-3.34h-4.069a3.34 3.34 0 0 0-3.339 3.34l.001 9.933a3.34 3.34 0 0 0 3.338 3.339h4.07a3.34 3.34 0 0 0 3.34-3.34"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.125 15.334-.785.785M5.125 8.688l-.785-.786M20.117 15.334l.785.785M20.117 8.688l.785-.786M4.732 12.007h-1.11M20.51 12.007h1.11M12.621 16.9v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneRingVibration2Light;
