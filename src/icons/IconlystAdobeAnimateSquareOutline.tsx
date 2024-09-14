import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAnimateSquareOutline = ({
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
      d="M8.962 8.027a.75.75 0 0 1 .694.465l2.652 6.446a.75.75 0 0 1-1.387.57l-1.959-4.76-1.958 4.76a.75.75 0 1 1-1.387-.57l2.651-6.446a.75.75 0 0 1 .694-.465"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.509 12.922a.75.75 0 0 1 .75-.75h3.407a.75.75 0 0 1 0 1.5H7.26a.75.75 0 0 1-.75-.75M14.318 15.973a.75.75 0 0 0 .75-.75v-2.51a.935.935 0 0 1 1.871 0v2.51a.75.75 0 0 0 1.5 0v-2.51a2.435 2.435 0 1 0-4.87 0v2.51c0 .414.335.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeAnimateSquareOutline;
