import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraSquareOutline = ({
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
      d="M3.99 3.96c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.01 22 6.461 22 8.09v7.947c0 1.628-.509 3.078-1.487 4.129-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.051-1.487-2.501-1.487-4.129V8.09c0-1.628.511-3.079 1.49-4.13m1.097 1.023C4.41 5.709 4 6.772 4 8.089v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.727 1.085-1.79 1.085-3.107V8.09c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.996 7.371a.75.75 0 0 1 .75.75v4.76a2.375 2.375 0 0 0 2.375 2.375H15.6a.75.75 0 0 1 0 1.5h-1.478a3.875 3.875 0 0 1-3.875-3.875V8.12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.15 12.313a.75.75 0 0 1 .75-.75h4.89a.75.75 0 0 1 0 1.5H8.9a.75.75 0 0 1-.75-.75M8.15 9.8a.75.75 0 0 1 .75-.75h4.89a.75.75 0 0 1 0 1.5H8.9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraSquareOutline;
