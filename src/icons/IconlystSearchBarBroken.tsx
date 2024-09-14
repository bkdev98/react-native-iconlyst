import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBarBroken = ({
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
      d="M6.827 18.703c-2.966 0-4.827-2.1-4.827-5.074v-3.26c0-2.971 1.852-5.072 4.827-5.072h10.347c2.967 0 4.826 2.1 4.826 5.073v3.26c0 2.972-1.852 5.073-4.827 5.073h-7.045"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.429 8.905a2.77 2.77 0 1 1-2.179 1.059M16.314 13.704l1.395 1.391"
    />
  </Svg>
);
export default IconlystSearchBarBroken;
