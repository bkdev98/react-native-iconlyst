import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeaPotLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.418 14.217h11.346m-9.862 6.63c-1.47-1.425-2.238-3.578-1.714-5.875.52-2.276 2.38-4.097 4.666-4.578 3.99-.838 7.518 2.167 7.518 6.023a6.15 6.15 0 0 1-1.892 4.442 2.13 2.13 0 0 1-1.48.584H9.397c-.556 0-1.095-.21-1.495-.596m5.623-11.932a1.33 1.33 0 1 0-2.661.001 1.33 1.33 0 0 0 2.661-.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.02 17.59-3.526-5.68h1.492l2.833 1.474M3.988 6.436a1.37 1.37 0 0 1 0 1.941M7.455 2.557a1.37 1.37 0 0 0 0 1.94 1.37 1.37 0 0 1 0 1.94"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.518 12c.995-.828 3.733-1.442 4.736.899 1.083 2.525-1.583 5.013-3.173 5.514"
    />
  </Svg>
);
export default IconlystTeaPotLight;
