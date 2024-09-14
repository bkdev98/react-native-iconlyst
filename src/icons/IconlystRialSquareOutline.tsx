import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialSquareOutline = ({
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
      d="M3.99 3.96c.985-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.062.59 4.045 1.647C21.492 5.011 22 6.461 22 8.09v7.947c0 1.627-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.09c0-1.629.511-3.079 1.49-4.13m1.098 1.023C4.41 5.709 4 6.773 4 8.089v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.79 1.085-3.107V8.09c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.781 15.684a.75.75 0 0 1 .75-.75h1.307a.75.75 0 0 1 0 1.5h-1.307a.75.75 0 0 1-.75-.75M17.44 10.424a.75.75 0 0 1 .75.75v2.294a3.175 3.175 0 0 1-2.09 2.92.75.75 0 1 1-.512-1.41 1.675 1.675 0 0 0 1.102-1.534v-2.27a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.531 7.691a.75.75 0 0 1 .75.75v3.866c0 .326.265.59.591.59h.216c.326 0 .59-.265.59-.59v-1.031a.75.75 0 1 1 1.5 0v1.031c0 1.154-.935 2.09-2.088 2.09h-.218a2.09 2.09 0 0 1-2.09-2.09V8.441a.75.75 0 0 1 .75-.75M10.44 7.691a.75.75 0 0 1 .75.75v5.255a2.439 2.439 0 1 1-4.877 0v-.932a.75.75 0 0 1 1.5 0v.932a.939.939 0 1 0 1.877 0V8.441a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRialSquareOutline;
