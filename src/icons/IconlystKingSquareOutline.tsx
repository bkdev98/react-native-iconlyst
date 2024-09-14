import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingSquareOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.276 15.638H9.23a1.48 1.48 0 0 1-1.46-1.226l-.78-4.418a.985.985 0 0 1 1.588-.936l1.523 1.232 1.417-1.592a.98.98 0 0 1 1.464-.002l1.418 1.6 1.521-1.232a.983.983 0 0 1 1.59.935l-.776 4.42a1.485 1.485 0 0 1-1.459 1.22m-6.569-4.546.54 3.061 6.03-.015.521-3.047-.832.674a.98.98 0 0 1-1.355-.108l-1.359-1.528-1.36 1.528a.977.977 0 0 1-1.358.1z"
    />
  </Svg>
);
export default IconlystKingSquareOutline;
