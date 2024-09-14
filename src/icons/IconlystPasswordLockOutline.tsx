import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 4.507C4.973 3.45 6.375 2.859 8.03 2.859h8.435c1.66 0 3.062.591 4.046 1.648.978 1.05 1.487 2.501 1.487 4.128v2.24a.75.75 0 0 1-1.5 0v-2.24c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.031c-1.284 0-2.273.45-2.945 1.17C4.41 6.256 4 7.32 4 8.635v4.055c0 1.318.409 2.381 1.085 3.107.67.72 1.658 1.17 2.947 1.17h3.892a.75.75 0 0 1 0 1.5H8.031c-1.66 0-3.062-.59-4.046-1.648C3.007 15.77 2.5 14.318 2.5 12.69V8.635c0-1.628.511-3.078 1.49-4.128M16.997 17.29a.66.66 0 0 0-.66.66v1.596c0 .365.297.661.66.661h2.843a.66.66 0 0 0 .66-.66V17.95a.66.66 0 0 0-.66-.66zm-2.16.66c0-1.193.967-2.16 2.16-2.16h2.843c1.193 0 2.16.967 2.16 2.16v1.596a2.16 2.16 0 0 1-2.16 2.161h-2.843a2.16 2.16 0 0 1-2.16-2.16z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.386 13.094a2.447 2.447 0 0 1 2.479 2.415v1.06a.75.75 0 0 1-1.5 0v-1.045a.947.947 0 0 0-1.893-.005v1.05a.75.75 0 0 1-1.5 0v-1.07a2.445 2.445 0 0 1 2.414-2.405M11.24 10.593a1.011 1.011 0 1 1 2.021 0 1.011 1.011 0 0 1-2.022 0M15.146 10.593a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0M7.333 10.593a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordLockOutline;
