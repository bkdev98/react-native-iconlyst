import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareBoldsharp = ({
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
      d="M15.998 12.739 13 9.73v7.106h-1.5V9.73l-2.998 3.009-1.063-1.059 4.811-4.828 4.81 4.828zM2.5 21.75H22V2.25H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpSquareBoldsharp;
