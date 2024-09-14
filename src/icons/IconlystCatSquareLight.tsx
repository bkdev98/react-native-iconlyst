import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.035 3.3H7.601c-2.949 0-4.783 2.082-4.783 5.027v7.947c0 2.946 1.834 5.027 4.783 5.027h8.434c2.948 0 4.783-2.081 4.783-5.027V8.327c0-2.945-1.843-5.026-4.783-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.071 15.912c-.42-.298-.877-.51-1.347-.698-.549-.22-1-.703-1-1.295v-.81c0-2.679-1.686-4.65-3.954-5.588v1.774c-1.09 0-2.016.285-2.474 1.4-.265.643-.7.985-1.336.985-.173.7.381 2.17 1.604 2.17.92 0 1.713.774 1.521 1.863q-.13.734-.216 1.368M10.97 11.592v.007"
    />
  </Svg>
);
export default IconlystCatSquareLight;
