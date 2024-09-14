import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalContractSquareLight = ({
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
      d="M21 16.218V7.783C21 4.835 18.919 3 15.974 3H8.026C5.081 3 3 4.835 3 7.783v8.435C3 19.166 5.081 21 8.026 21h7.948C18.919 21 21 19.156 21 16.218M10.936 17.213V13.06m0 0H6.782m4.154 0-6.59 6.59M13.07 6.772v4.154m0 0h4.153m-4.154 0 6.59-6.59"
    />
  </Svg>
);
export default IconlystArrowsDiagonalContractSquareLight;
