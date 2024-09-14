import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3Light = ({
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
      d="M7.483 3.117h9.033C19.28 3.117 21 5.068 21 7.83v8.338c0 2.761-1.72 4.712-4.485 4.712H7.483C4.719 20.88 3 18.93 3 16.167V7.83c0-2.76 1.727-4.712 4.483-4.712M16.474 20.88v-3.786M7.568 20.88v-3.786M3.117 17.09h17.767M20.882 6.91H3.115M16.474 3.145v3.762M7.568 3.145v3.762M12.022 3.145v17.737"
    />
  </Svg>
);
export default IconlystFilm3Light;
