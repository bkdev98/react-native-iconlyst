import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRelievedOutline = ({
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
      fillRule="evenodd"
      d="M8.897 13.757a.75.75 0 0 1 1.051.138c.596.774 1.446 1.228 2.363 1.228a.75.75 0 0 1 0 1.5c-1.437 0-2.708-.715-3.552-1.814a.75.75 0 0 1 .138-1.052M15.058 9.586a.66.66 0 0 0-.521.281.75.75 0 1 1-1.19-.912c.396-.517 1.007-.87 1.711-.87s1.316.353 1.713.87a.75.75 0 1 1-1.19.912.66.66 0 0 0-.523-.281M9.44 9.586a.66.66 0 0 0-.521.281.75.75 0 1 1-1.191-.912c.396-.517 1.008-.87 1.712-.87.705 0 1.316.353 1.713.87a.75.75 0 0 1-1.191.912.66.66 0 0 0-.522-.281"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRelievedOutline;
