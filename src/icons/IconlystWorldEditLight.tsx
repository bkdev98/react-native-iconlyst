import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldEditLight = ({
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
      d="M11.306 21a9.013 9.013 0 0 1-8.278-8.99C3.028 7.04 7.06 3 12.038 3c4.603 0 8.39 3.45 8.934 7.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.376 11.09a21 21 0 0 0-.197-2.212C14.71 5.446 13.482 3 12.04 3c-1.435 0-2.672 2.446-3.141 5.878a22 22 0 0 0-.216 3.13c0 1.107.075 2.167.216 3.142.328 2.38 1.34 4.678 2.409 5.85M3.028 12.018h8.602"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.19 20.934-1.225.056a.84.84 0 0 1-.849-.624l-.312-1.186a.84.84 0 0 1 .135-.709l3.647-4.97a1.197 1.197 0 0 1 1.673-.257l.959.706c.533.39.647 1.14.256 1.672l-3.647 4.971a.84.84 0 0 1-.636.34"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.701 14.703 2.888 2.122"
    />
  </Svg>
);
export default IconlystWorldEditLight;
