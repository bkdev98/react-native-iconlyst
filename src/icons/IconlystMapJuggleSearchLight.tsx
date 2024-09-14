import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapJuggleSearchLight = ({
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
      d="m16.854 3.816 1.944 1.944m0-1.944L16.854 5.76M3 7.727l1.944 1.944m0-1.944L3 9.671"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.92 16.969a1.78 1.78 0 1 1-2.093 2.88 1.78 1.78 0 0 1 2.092-2.88"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.916 12.489 1.324 1.622m-2.798-6.904a2.945 2.945 0 1 1-.601 5.861 2.946 2.946 0 0 1 .601-5.861M19.161 11.785a7.157 7.157 0 0 1-5.938 8.058 7.2 7.2 0 0 1-3.868-.448"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 13.583-1.712-1.97-1.958 1.702"
    />
  </Svg>
);
export default IconlystMapJuggleSearchLight;
