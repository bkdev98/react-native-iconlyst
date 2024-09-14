import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalBold = ({
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
      d="M13.152 10.1V8.18h-2.307v1.92a.75.75 0 0 1-.75.75H8.18v2.3h1.915a.75.75 0 0 1 .75.75v1.92h2.307V13.9a.75.75 0 0 1 .75-.75h1.915v-2.3h-1.915a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.317 13.39c0 .695-.564 1.261-1.259 1.261h-1.406v1.41a1.26 1.26 0 0 1-1.259 1.26h-2.789a1.26 1.26 0 0 1-1.259-1.26v-1.41H7.939A1.26 1.26 0 0 1 6.68 13.39V10.6c0-.689.565-1.25 1.259-1.25h1.406V7.94c0-.695.565-1.26 1.259-1.26h2.789a1.26 1.26 0 0 1 1.259 1.26v1.41h1.406c.695 0 1.259.561 1.259 1.25zm-1.1-10.89H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalBold;
