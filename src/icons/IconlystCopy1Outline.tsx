import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy1Outline = ({
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
      d="M4.165 3.358c.667-.715 1.61-1.108 2.7-1.108h5.198c.962 0 1.81.302 2.457.869.644.565 1.04 1.35 1.178 2.24a.75.75 0 0 1-1.482.23c-.091-.589-.34-1.04-.685-1.342-.343-.3-.828-.497-1.468-.497H6.866c-.718 0-1.248.25-1.603.63-.36.387-.593.969-.593 1.72v6.695c0 .685.195 1.23.501 1.611.301.375.745.636 1.336.71a.75.75 0 0 1-.184 1.488c-.958-.119-1.763-.563-2.321-1.259-.554-.69-.832-1.58-.832-2.55V6.1c0-1.063.335-2.032.995-2.742"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.24 8.47c.666-.715 1.61-1.107 2.7-1.107h5.195c1.094 0 2.037.391 2.703 1.107.661.71.993 1.677.993 2.74v6.694c0 1.062-.332 2.03-.993 2.74-.666.716-1.61 1.106-2.704 1.106H11.94c-1.093 0-2.037-.39-2.703-1.106-.66-.71-.993-1.678-.993-2.74V11.21c0-1.063.335-2.03.996-2.74m1.097 1.022c-.36.386-.593.966-.593 1.717v6.695c0 .753.233 1.333.59 1.718.354.378.883.628 1.606.628h5.195c.723 0 1.253-.25 1.605-.628.359-.385.591-.965.591-1.718V11.21c0-.752-.232-1.332-.59-1.717-.353-.379-.883-.629-1.606-.629H11.94c-.72 0-1.25.25-1.603.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy1Outline;
