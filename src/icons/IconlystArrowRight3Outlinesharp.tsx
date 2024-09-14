import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Outlinesharp = ({
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
      d="M20.999 12.75h-17.5v-1.5H21z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.25 11.25c-3.528 0-6.41 3.102-6.41 6.41v.75h1.5v-.75c0-2.511 2.242-4.91 4.91-4.91H21v-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.25 12.75c-3.528 0-6.41-3.102-6.41-6.41v-.75h1.5v.75c0 2.512 2.242 4.91 4.91 4.91H21v1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight3Outlinesharp;
