import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLoadingLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.78 7.55A9 9 0 0 1 6.23 6M17.562 20.003a9.006 9.006 0 0 1-7.523 1.694M6.85 20.277a9 9 0 0 1-3.12-3.782M3.325 10.46a9 9 0 0 0-.299 3.033M19.646 17.64a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.462 9.632.767 1.532c.076.15.222.255.389.278l1.716.248a.507.507 0 0 1 .286.868l-1.241 1.193a.5.5 0 0 0-.15.45l.295 1.684a.515.515 0 0 1-.75.537l-1.532-.794a.53.53 0 0 0-.482 0l-1.533.795a.515.515 0 0 1-.75-.537l.293-1.683a.5.5 0 0 0-.147-.452L8.38 12.56a.51.51 0 0 1 .286-.87l1.716-.246a.52.52 0 0 0 .389-.279l.768-1.532a.52.52 0 0 1 .923 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarLoadingLight;
