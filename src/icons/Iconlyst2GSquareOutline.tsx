import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst2GSquareOutline = ({
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
      d="M3.99 4.772c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.648C21.49 5.823 22 7.273 22 8.9v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.128V8.9c0-1.628.511-3.078 1.49-4.129m1.097 1.023C4.41 6.522 4 7.585 4 8.901v7.948c0 1.317.408 2.38 1.084 3.106.67.72 1.659 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.9c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17m5.089 4.367a.75.75 0 0 1 .75-.75h2.646a.75.75 0 0 1 0 1.5h-1.896v1.21h1.368a.75.75 0 0 1 0 1.5h-1.369v1.217h1.897a.75.75 0 0 1 0 1.5h-2.646a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst2GSquareOutline;
