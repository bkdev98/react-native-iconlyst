import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWikipediaSquareOutline = ({
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
      d="M17.367 7.99a.75.75 0 0 1 .434.968l-2.9 7.61c-.382 1.002-1.81 1.025-2.201.005-.638-1.668-1.897-4.964-2.718-7.132h-.125a.75.75 0 1 1 0-1.5h.643a.75.75 0 0 1 .702.485c.699 1.85 1.855 4.88 2.597 6.821l2.6-6.823a.75.75 0 0 1 .968-.433"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.535 8.691a.75.75 0 0 1 .75-.75H18a.75.75 0 1 1 0 1.5h-1.714a.75.75 0 0 1-.75-.75M6.634 7.99a.75.75 0 0 1 .967.434l2.6 6.82 2.599-6.82a.75.75 0 0 1 .7-.483h.643a.75.75 0 0 1 0 1.5h-.126l-2.715 7.126c-.386 1.011-1.817 1.011-2.203 0L6.2 8.958a.75.75 0 0 1 .434-.967"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.25 8.691a.75.75 0 0 1 .75-.75h1.714a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWikipediaSquareOutline;
