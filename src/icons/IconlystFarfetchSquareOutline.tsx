import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarfetchSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.65 13.352a.75.75 0 0 1 .75-.75h7.2a.75.75 0 1 1 0 1.5H8.4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.35 11.548c0-.91.738-1.65 1.65-1.65h3.6a.75.75 0 1 1 0 1.5H12a.15.15 0 0 0-.15.15v4.5a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.2 8.7c-.58 0-1.05.47-1.05 1.05v6.3a.75.75 0 0 1-1.5 0v-6.3A2.55 2.55 0 0 1 10.2 7.2h5.4a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFarfetchSquareOutline;