import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkOutlinesharp = ({
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
      d="M13 13.94v4.037h-1.5V13.94z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.255 5.13h19.99v7.68l-.371.217c-2.589 1.515-5.973 2.413-9.63 2.413-3.656 0-7.03-.898-9.618-2.413l-.371-.217zm1.5 1.5v5.312C6.04 13.183 9 13.94 12.245 13.94s6.214-.757 8.5-1.998V6.63z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.257 2.55h5.986l1.493 3.452-1.377.595-1.102-2.547h-4.014L9.14 6.597l-1.376-.595zM3.753 14.418l.19 5.532h16.614l.19-5.532 1.499.051-.24 6.981H2.494l-.24-6.98z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorkOutlinesharp;
