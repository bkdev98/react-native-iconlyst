import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnBold = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M7.583 12.002c0-1.007.698-1.655 1.376-1.655s1.375.648 1.375 1.655-.698 1.655-1.375 1.655c-.678 0-1.376-.648-1.376-1.655"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.812 4.724c.86-.924 2.09-1.447 3.557-1.447H17.63c1.47 0 2.7.523 3.56 1.447.857.92 1.31 2.197 1.31 3.646v7.26c0 1.448-.453 2.725-1.31 3.645-.86.924-2.09 1.447-3.56 1.447H6.368c-1.47 0-2.7-.523-3.56-1.447-.857-.92-1.309-2.197-1.309-3.646V8.37c0-1.448.454-2.726 1.312-3.645M17.916 9.59a.75.75 0 0 0-1.5 0v2.39L14.36 9.269a.75.75 0 0 0-1.348.453v4.625a.75.75 0 0 0 1.5 0V11.95l2.058 2.714a.75.75 0 0 0 1.347-.453zM8.96 8.847c-1.675 0-2.876 1.5-2.876 3.155s1.2 3.155 2.876 3.155 2.875-1.5 2.875-3.155-1.2-3.155-2.875-3.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOnBold;
