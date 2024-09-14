import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletCircleTwoTone = ({
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
      d="M12 16.746a3.23 3.23 0 0 1-3.229-3.228v-2.015a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.23 3.23 0 0 1-3.229 3.228"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.87 19.896a9 9 0 1 1 6.624 1.481C12.677 21.513 12 20.828 12 20v-3.248"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.316 10.863V8.78m3.368 2.083V8.78"
    />
  </Svg>
);
export default IconlystPowerOutletCircleTwoTone;
