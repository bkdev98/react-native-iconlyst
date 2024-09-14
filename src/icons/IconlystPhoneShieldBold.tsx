import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldBold = ({
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
      d="M11.604 18.658a1.01 1.01 0 0 1-1.011-1.01 1.012 1.012 0 0 1 2.021 0c0 .557-.453 1.01-1.01 1.01m4.606-5.364a2.5 2.5 0 0 1-1.447 0c-1.778-.537-4.786-2.366-4.786-5.813 0-.736-.01-1.268-.017-1.659-.016-.87-.024-1.65.374-2.377.125-.228-.023-.547-.282-.547H8.846a4.124 4.124 0 0 0-4.117 4.12l.001 10.76a4.123 4.123 0 0 0 4.117 4.12h5.515a4.123 4.123 0 0 0 4.118-4.12v-5.04c0-.246-.282-.39-.49-.261-.628.39-1.257.66-1.78.817"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.764 5.768c-.007.404-.017.954-.017 1.713 0 1.571-1.654 2.379-2.26 2.622-.607-.243-2.26-1.051-2.26-2.622 0-.763-.01-1.314-.018-1.718-.005-.296-.01-.562-.005-.719.503-.243 1.978-.759 2.253-.795.34.037 1.911.588 2.312.779.006.153.001.43-.005.74m1.127-1.771c-.428-.422-2.899-1.247-3.404-1.247-.508 0-2.98.826-3.407 1.248-.396.394-.389.747-.37 1.792.007.398.017.94.017 1.691 0 3.031 3.398 4.094 3.542 4.138a.77.77 0 0 0 .435 0c.144-.044 3.543-1.107 3.543-4.138 0-.747.01-1.288.017-1.686.02-1.048.025-1.402-.373-1.798"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneShieldBold;
