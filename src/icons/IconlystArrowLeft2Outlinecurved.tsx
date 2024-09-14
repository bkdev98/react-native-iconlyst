import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft2Outlinecurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.5 19.75a.74.74 0 0 1-.382-.104C14.364 19.2 7.75 15.191 7.75 12s6.613-7.199 7.368-7.646a.75.75 0 1 1 .764 1.292C13.318 7.166 9.25 10.233 9.25 12c0 1.77 4.068 4.837 6.632 6.354a.75.75 0 0 1-.383 1.396"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeft2Outlinecurved;
