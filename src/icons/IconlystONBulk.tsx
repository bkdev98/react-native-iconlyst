import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystONBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M2.812 4.724c.86-.924 2.09-1.447 3.557-1.447H17.63c1.47 0 2.7.523 3.56 1.447.857.92 1.31 2.197 1.31 3.646v7.26c0 1.448-.453 2.725-1.31 3.645-.86.924-2.09 1.447-3.56 1.447H6.368c-1.47 0-2.7-.523-3.56-1.447-.857-.92-1.309-2.197-1.309-3.646V8.37c0-1.448.454-2.726 1.312-3.645"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.166 8.842a.75.75 0 0 1 .75.75v4.62a.75.75 0 0 1-1.347.454l-2.058-2.714v2.394a.75.75 0 1 1-1.5 0V9.722a.75.75 0 0 1 1.348-.454l2.057 2.714v-2.39a.75.75 0 0 1 .75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.083 12.003c0-1.655 1.2-3.156 2.876-3.156s2.875 1.5 2.875 3.156c0 1.655-1.2 3.155-2.875 3.155s-2.876-1.5-2.876-3.155m2.876-1.656c-.678 0-1.376.649-1.376 1.656s.698 1.655 1.376 1.655 1.375-.649 1.375-1.655-.698-1.656-1.375-1.656"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystONBulk;
