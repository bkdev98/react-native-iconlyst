import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase3Light = ({
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
      d="M19.603 16.682V7.317A4.317 4.317 0 0 0 15.285 3H8.318A4.317 4.317 0 0 0 4 7.317v9.365A4.32 4.32 0 0 0 8.317 21h6.969a4.32 4.32 0 0 0 4.317-4.318M4 8.688h15.603"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.805 16.76v.047M12 16.77a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystAirpodCase3Light;
