import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockBold = ({
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
      d="M16.12 18.188h-.07c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75.41 0 .79.33.79.75 0 .41-.3.75-.72.75m-4.06 0h-.08c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75.41 0 .79.33.79.75 0 .41-.3.75-.71.75m-4.02 0h-.08c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75.41 0 .79.33.79.75 0 .41-.3.75-.71.75m9.842-7.308a.285.285 0 0 0-.362.28v.288c0 1.93-1.57 3.51-3.5 3.51H9.98c-1.93 0-3.5-1.58-3.5-3.51v-.287a.285.285 0 0 0-.362-.28c-2.212.644-3.618 2.6-3.618 5.287 0 3.3 2.12 5.52 5.28 5.52h8.44c3.16 0 5.28-2.22 5.28-5.52 0-2.686-1.406-4.643-3.619-5.288"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.978 4.457h.014c.909 0 1.655.732 1.667 1.63v.601h-3.315V6.09a1.653 1.653 0 0 1 1.634-1.633m.772 5.421v.88a.749.749 0 1 1-1.5 0v-.88c0-.42.34-.75.75-.75.42 0 .75.33.75.75m-2.77 4.08h4.04c1.38 0 2.5-1.13 2.5-2.51v-2.26c0-.97-.55-1.81-1.36-2.22l-.001-.891a3.17 3.17 0 0 0-3.172-3.12h-.026a3.15 3.15 0 0 0-3.117 3.12v.89l-.004.001c-.81.41-1.36 1.25-1.36 2.22v2.26a2.51 2.51 0 0 0 2.5 2.51"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordLockBold;
