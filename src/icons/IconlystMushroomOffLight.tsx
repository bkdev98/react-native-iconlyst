import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMushroomOffLight = ({
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
      d="M9.425 13.986c-.49 2.33-1.345 6.232.704 6.762 1.31.34 2.372.331 3.675.002 1.873-.473 1.317-3.694.794-6.038"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.365 5.37C4.094 6.545 3.245 8.124 3.02 10.03c-.409 3.455 5.56 4.426 10.73 3.783M15.489 7.093c1.005.158 1.864 1.18 2 2M3 3l18 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.183 3.662C9.345 3.23 10.643 3 12.015 3c4.597 0 8.296 2.167 8.968 6.819.188 1.303-1.195 2.374-3.27 3.106"
    />
  </Svg>
);
export default IconlystMushroomOffLight;
