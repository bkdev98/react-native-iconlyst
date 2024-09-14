import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroSquareOutline = ({
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
      d="M11.353 10.623a3.24 3.24 0 0 1 2.939-1.632.75.75 0 0 0 .058-1.5 4.74 4.74 0 0 0-4.301 2.39l-.002.003a4.43 4.43 0 0 0 0 4.357l.002.002a4.74 4.74 0 0 0 4.3 2.39.75.75 0 1 0-.057-1.5 3.24 3.24 0 0 1-2.94-1.631 2.93 2.93 0 0 1 0-2.88"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.793 10.941a.75.75 0 0 1 .75-.75h4.458a.75.75 0 0 1 0 1.5H9.543a.75.75 0 0 1-.75-.75m0 2.245a.75.75 0 0 1 .75-.75h4.458a.75.75 0 0 1 0 1.5H9.543a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroSquareOutline;
