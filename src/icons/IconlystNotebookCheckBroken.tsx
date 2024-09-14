import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookCheckBroken = ({
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
      d="M17.028 3a3.81 3.81 0 0 1 3.657 3.835v10.328A3.754 3.754 0 0 1 17.015 21L8.625 21a3.747 3.747 0 0 1-3.76-3.657V6.835a3.75 3.75 0 0 1 3.67-3.834h5.236M10.154 15.936h6.859m-1.161-3.706h1.16"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.902 10.337 1.719 1.718 4.316-4.317M3.314 16.697H6.64m-3.326-4.699H6.64M3.314 7.301H6.64"
    />
  </Svg>
);
export default IconlystNotebookCheckBroken;
