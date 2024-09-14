import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber9SquareOutline = ({
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
      d="M4.24 4.44c.986-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.061.59 4.045 1.647.979 1.051 1.487 2.502 1.487 4.13v7.947c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.283c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.569c0-1.629.511-3.079 1.49-4.13m1.098 1.023C4.66 6.189 4.25 7.252 4.25 8.569v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.569c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.169-2.948-1.169H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 9.293a1.536 1.536 0 0 0 0 3.071h1.535V10.83c0-.849-.687-1.536-1.535-1.536m3.035 1.536a3.035 3.035 0 1 0-3.035 3.035h1.535v.393c0 .848-.687 1.536-1.535 1.536h-1.622a.75.75 0 0 0 0 1.5H12.5a3.036 3.036 0 0 0 3.035-3.036z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber9SquareOutline;
