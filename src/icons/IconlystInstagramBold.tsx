import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInstagramBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.845 10.089a2.754 2.754 0 0 0-2.753 2.75 2.753 2.753 0 0 0 5.505 0 2.753 2.753 0 0 0-2.752-2.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.864 8.918c-.57 0-1.035-.462-1.035-1.03a1.034 1.034 0 0 1 2.069 0c0 .568-.464 1.03-1.034 1.03m-5.02 8.17a4.256 4.256 0 0 1-4.252-4.25 4.256 4.256 0 0 1 4.252-4.25 4.255 4.255 0 0 1 4.252 4.25 4.255 4.255 0 0 1-4.252 4.25m4.373-14.08H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInstagramBold;
