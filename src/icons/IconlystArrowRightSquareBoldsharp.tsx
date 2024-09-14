import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBoldsharp = ({
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
      d="m12.567 16.809-1.058-1.063 3.013-2.996H7.41v-1.5h7.112l-3.013-2.995 1.058-1.063L17.403 12zM2.5 21.75H22V2.25H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightSquareBoldsharp;
