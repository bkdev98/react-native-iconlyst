import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparkMailSquareOutline = ({
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
      d="M10.48 6.632a1.75 1.75 0 0 1 3.04 0l-.652.372.651-.372 3.998 7a1.75 1.75 0 0 1-1.795 2.595l-1.592-.253-.457.852a1.75 1.75 0 0 1-3.085 0l-.479-.893-1.83.294a1.75 1.75 0 0 1-1.797-2.596l.652.372-.652-.372zM12 7.25a.25.25 0 0 0-.217.126l-3.998 7a.25.25 0 0 0 .257.37l2.357-.378a.75.75 0 0 1 .78.386l.73 1.364a.25.25 0 0 0 .441 0l.71-1.323a.75.75 0 0 1 .779-.387l2.119.338a.25.25 0 0 0 .256-.37l-3.997-7A.25.25 0 0 0 12 7.25"
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
export default IconlystSparkMailSquareOutline;
