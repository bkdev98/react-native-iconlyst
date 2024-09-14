import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointerSquareOutline = ({
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
      d="M3.99 3.897C4.977 2.84 6.379 2.25 8.034 2.25h8.435c1.66 0 3.061.59 4.045 1.647C21.492 4.948 22 6.4 22 8.027v7.947c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.628.511-3.079 1.49-4.13M5.089 4.92C4.41 5.646 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.169-2.948-1.169H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.878 7.733a.75.75 0 0 1 .774-.189l7.671 2.548a.75.75 0 0 1 .031 1.413l-3.263 1.243-1.244 3.264a.75.75 0 0 1-1.405-.01l-2.73-7.49a.75.75 0 0 1 .166-.779m1.774 1.724 1.51 4.14.646-1.697a.75.75 0 0 1 .434-.434l1.611-.614z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.977 11.636a.75.75 0 0 1 1.061 0l3.247 3.246a.75.75 0 1 1-1.06 1.06l-3.248-3.246a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMousePointerSquareOutline;
