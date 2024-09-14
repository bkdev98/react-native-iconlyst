import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3TwoTone = ({
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
      d="M7.983 3.117h9.033c2.764 0 4.484 1.951 4.484 4.712v8.338c0 2.761-1.72 4.712-4.485 4.712H7.983c-2.764 0-4.483-1.95-4.483-4.712V7.83c0-2.76 1.727-4.712 4.483-4.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.974 20.882v-3.786m-8.906 3.786v-3.786m-4.452-.005h17.767m0-10.18H3.614m13.36-3.766v3.762M8.067 3.145v3.762m4.454-3.762v17.737"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilm3TwoTone;
