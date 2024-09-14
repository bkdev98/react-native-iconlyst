import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase4Broken = ({
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
      d="M15.286 21a4.32 4.32 0 0 0 4.317-4.318V7.317A4.317 4.317 0 0 0 15.285 3H8.318A4.317 4.317 0 0 0 4 7.317v9.365A4.32 4.32 0 0 0 8.317 21h3.484M7.787 8.163h8.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.793 17.14 1.397-2.565h-2.778l1.396-2.567"
    />
  </Svg>
);
export default IconlystAirpodCase4Broken;
