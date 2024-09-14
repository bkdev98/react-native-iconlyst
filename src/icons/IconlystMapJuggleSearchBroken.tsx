import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapJuggleSearchBroken = ({
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
      d="m17.104 3.814 1.944 1.944m0-1.944-1.944 1.944M3.25 7.725 5.194 9.67m0-1.944L3.25 9.67"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.17 16.969a1.78 1.78 0 1 1-2.093 2.88 1.78 1.78 0 0 1 2.092-2.88"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.692 7.207a2.945 2.945 0 1 1-.601 5.861A2.946 2.946 0 0 1 9.227 8.14m3.939 4.35 1.324 1.623M19.411 11.785a7.157 7.157 0 0 1-5.938 8.058q-.534.085-1.06.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.25 13.583-1.712-1.97-1.958 1.702"
    />
  </Svg>
);
export default IconlystMapJuggleSearchBroken;
