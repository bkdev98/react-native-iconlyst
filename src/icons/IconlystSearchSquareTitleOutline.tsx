import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareTitleOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v2.11a.75.75 0 0 1-1.5 0v-2.11c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h2.596a.75.75 0 0 1 0 1.5H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M7.06 8.34a.75.75 0 0 1 .75-.75h3.116a.75.75 0 0 1 0 1.5H7.811a.75.75 0 0 1-.75-.75m9.208 4.411a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7m3.482 5.457a4.35 4.35 0 1 0-1.093 1.028l1.504 1.502a.75.75 0 0 0 1.06-1.062z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSquareTitleOutline;
