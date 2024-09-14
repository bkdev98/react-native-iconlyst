import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOffBold = ({
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
      d="M5.96 12.002c0-1.007.697-1.655 1.375-1.655.677 0 1.375.648 1.375 1.655s-.698 1.655-1.375 1.655c-.678 0-1.376-.648-1.376-1.655"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.812 4.724c.86-.924 2.09-1.447 3.557-1.447H17.63c1.47 0 2.7.523 3.56 1.447.857.92 1.31 2.197 1.31 3.646v7.26c0 1.448-.453 2.725-1.31 3.645-.86.924-2.09 1.447-3.56 1.447H6.368c-1.47 0-2.7-.523-3.56-1.447-.857-.92-1.309-2.197-1.309-3.646V8.37c0-1.448.454-2.726 1.312-3.645m8.857 4.034a.75.75 0 0 0-.75.75v5.044a.75.75 0 0 0 1.5 0V12.78h1.41a.75.75 0 0 0 0-1.5h-1.41v-1.022h1.772a.75.75 0 1 0 0-1.5zm4.6 0a.75.75 0 0 0-.75.75v5.044a.75.75 0 0 0 1.5 0V12.78h1.41a.75.75 0 0 0 0-1.5h-1.41v-1.022h1.772a.75.75 0 1 0 0-1.5zm-8.934.089c-1.675 0-2.876 1.5-2.876 3.155s1.2 3.155 2.876 3.155 2.875-1.5 2.875-3.155-1.2-3.155-2.875-3.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOffBold;
