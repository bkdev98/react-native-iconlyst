import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldBulk = ({
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
      d="M16.21 13.294a2.5 2.5 0 0 1-1.447 0c-1.778-.537-4.786-2.366-4.786-5.813 0-.736-.01-1.268-.017-1.659-.016-.87-.024-1.65.374-2.377.125-.228-.023-.547-.282-.547H8.846a4.124 4.124 0 0 0-4.117 4.12l.001 10.76a4.123 4.123 0 0 0 4.117 4.12h5.515a4.123 4.123 0 0 0 4.118-4.12v-5.04c0-.246-.282-.39-.49-.261-.628.39-1.257.66-1.78.817"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.488 2.75c.505 0 2.976.825 3.404 1.247.398.396.392.75.373 1.798l-.001.041c-.007.394-.017.923-.017 1.645 0 3.031-3.399 4.094-3.543 4.138a.77.77 0 0 1-.434 0c-.144-.044-3.543-1.107-3.543-4.138 0-.726-.009-1.257-.016-1.652v-.044c-.02-1.041-.026-1.394.37-1.787.427-.422 2.899-1.248 3.407-1.248m2.276 3.058v-.04c.006-.31.012-.587.006-.74-.401-.191-1.973-.742-2.312-.779-.276.036-1.75.552-2.254.795a17 17 0 0 0 .005.719c.008.404.018.955.018 1.718 0 1.571 1.653 2.379 2.26 2.622.606-.243 2.26-1.051 2.26-2.622 0-.734.01-1.273.017-1.673"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.604 18.659a1.01 1.01 0 0 1-1.01-1.01c0-.556.453-1.01 1.01-1.01s1.01.454 1.01 1.01c0 .557-.453 1.01-1.01 1.01"
    />
  </Svg>
);
export default IconlystPhoneShieldBulk;
