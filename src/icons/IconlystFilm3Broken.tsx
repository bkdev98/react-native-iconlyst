import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3Broken = ({
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
      d="M21.25 11.998v4.17c0 2.76-1.72 4.711-4.485 4.711H7.733c-2.764 0-4.483-1.95-4.483-4.712V7.83c0-2.76 1.727-4.712 4.483-4.712h9.033c2.764 0 4.484 1.951 4.484 4.712v.737M16.724 20.88v-3.786M7.818 20.88v-3.786M3.366 17.09h17.767M21.132 6.91H3.365M16.724 3.145v3.762M7.818 3.145v3.762M12.272 10.577v10.305m0-17.737v3.669"
    />
  </Svg>
);
export default IconlystFilm3Broken;
