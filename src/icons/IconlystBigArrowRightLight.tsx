import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowRightLight = ({
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
      d="M2.75 10.197c0-.76.617-1.377 1.377-1.377h7.628a.53.53 0 0 0 .53-.53V5.806c0-1.233 1.5-1.848 2.37-.973 2.059 2.07 4.133 4.127 6.195 6.195a1.373 1.373 0 0 1-.002 1.94c-2.066 2.069-4.138 4.13-6.2 6.201-.87.873-2.364.258-2.364-.973v-2.49a.53.53 0 0 0-.53-.53H4.128c-.76 0-1.377-.616-1.377-1.377z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowRightLight;
