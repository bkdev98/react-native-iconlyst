import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareBoldsharp = ({
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
      d="M12.25 17.149 7.439 12.32l1.063-1.058 2.998 3.009V7.164H13v7.107l2.998-3.009 1.063 1.058zM2.5 21.75H22V2.25H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownSquareBoldsharp;
