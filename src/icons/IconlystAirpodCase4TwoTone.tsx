import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase4TwoTone = ({
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
      d="M20.103 16.682V7.317A4.317 4.317 0 0 0 15.785 3H8.818A4.317 4.317 0 0 0 4.5 7.317v9.365A4.32 4.32 0 0 0 8.817 21h6.969a4.32 4.32 0 0 0 4.317-4.318"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.287 8.163h8.027M12.293 17.14l1.397-2.565h-2.778l1.396-2.567"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpodCase4TwoTone;
