import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapJuggleSearchTwoTone = ({
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
      d="m17.354 3.816 1.944 1.944m0-1.944L17.354 5.76M3.5 7.727l1.944 1.944m0-1.944L3.5 9.671"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.42 16.969a1.78 1.78 0 1 1-2.093 2.88 1.78 1.78 0 0 1 2.092-2.88"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.416 12.489 1.324 1.622m-2.798-6.904a2.945 2.945 0 1 1-.601 5.861 2.946 2.946 0 0 1 .601-5.861"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.661 11.785a7.157 7.157 0 0 1-5.938 8.058 7.2 7.2 0 0 1-3.868-.448"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 13.583-1.712-1.97-1.958 1.702"
    />
  </Svg>
);
export default IconlystMapJuggleSearchTwoTone;
