import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.145 9.199H8.696V8.153h-.882A3.46 3.46 0 0 1 5.07 6.804a1.63 1.63 0 0 1-.318-.982V3.983c0-.353.106-.702.319-.984a3.22 3.22 0 0 1 2.408-1.277c1.861-.086 3.666 1.527 3.666 3.387zM7.05 3.879c.34 0 .614.275.614.614v1.01a.614.614 0 1 1-1.228 0v-1.01c0-.34.275-.614.614-.614M13.453 5.109v4.09h2.45V8.153h.882c1.105 0 2.12-.529 2.744-1.349.213-.281.318-.63.318-.982V3.983A1.63 1.63 0 0 0 19.528 3a3.22 3.22 0 0 0-2.408-1.277c-1.861-.086-3.667 1.527-3.667 3.387m3.482-.616a.614.614 0 1 1 1.228 0v1.01a.614.614 0 1 1-1.228 0zM6.64 9.781a2.14 2.14 0 0 0-2.14 2.14v5.015A4.564 4.564 0 0 0 9.063 21.5h6.558a4.563 4.563 0 0 0 4.563-4.564v-5.015a2.14 2.14 0 0 0-2.139-2.14zm4.757 7.624a.946.946 0 1 1 1.89 0 .946.946 0 0 1-1.89 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase1Bold;
