import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEASportsSquareOutline = ({
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
      fillRule="evenodd"
      d="M14.321 8.207c.293 0 .56.17.682.438l2.93 6.39a.75.75 0 1 1-1.364.626l-2.248-4.904-2.247 4.904a.75.75 0 0 1-1.364-.625l2.93-6.391a.75.75 0 0 1 .681-.438"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.837 13.98a.75.75 0 0 1 .75-.75h2.002a.75.75 0 0 1 0 1.5h-2.002a.75.75 0 0 1-.75-.75M6 11.925a.75.75 0 0 1 .75-.75h3.196a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75M7.37 8.957a.75.75 0 0 1 .75-.75h3.196a.75.75 0 0 1 0 1.5H8.12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.513 11.236a.75.75 0 0 1 .394.985L7.887 14.6h3.504a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.69-1.046l1.468-3.424a.75.75 0 0 1 .985-.394"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEASportsSquareOutline;