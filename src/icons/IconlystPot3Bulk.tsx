import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot3Bulk = ({
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
      d="M3.583 11.95c-.804 0-1.429.71-1.321 1.511l.18 1.363v.006a1.72 1.72 0 0 0 1.7 1.48h.4v.38c0 1.242.389 2.343 1.128 3.137.744.8 1.806 1.248 3.068 1.248h6.518c1.263 0 2.325-.449 3.069-1.247.74-.795 1.128-1.896 1.128-3.137l-.001-.381h.405a1.72 1.72 0 0 0 1.7-1.48l.181-1.37a1.336 1.336 0 0 0-1.321-1.51zm.96 2.86v-1.36h-.77l.155 1.174a.22.22 0 0 0 .214.186zm14.9-1.36.004 1.36h.41a.22.22 0 0 0 .215-.186v-.002l.155-1.173z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.998 2.674a2.01 2.01 0 0 0-1.78 2.941c-2.618.522-4.735 2.206-5.434 4.752A.5.5 0 0 0 5.27 11l13.424-.104a.5.5 0 0 0 .476-.64c-.73-2.482-2.819-4.123-5.392-4.64a2.009 2.009 0 0 0-1.78-2.943m-.51 2.009a.51.51 0 1 1 1.02 0 .51.51 0 0 1-1.02 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPot3Bulk;
