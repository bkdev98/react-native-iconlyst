import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeBridgeSquareOutline = ({
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
      d="M14.474 9.637a.75.75 0 0 1 .75.75v4.999a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.724 13.548c0-1.996 1.305-3.841 3.346-3.841a.75.75 0 1 1 0 1.5c-.96 0-1.846.895-1.846 2.34a.75.75 0 0 1-1.5 0M7.662 7.75H9.44A2.5 2.5 0 0 1 11.226 12a2.499 2.499 0 0 1-1.785 4.25H7.66a1.1 1.1 0 0 1-1.1-1.1V8.844a1.1 1.1 0 0 1 1.1-1.094m1.779 3.5a1 1 0 0 0 0-2H8.06v2zm-1.38 1.5h1.38a1 1 0 1 1 0 2H8.06zm-.405-3.5h.004z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeBridgeSquareOutline;
