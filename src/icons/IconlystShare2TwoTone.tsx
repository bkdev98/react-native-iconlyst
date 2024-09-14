import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare2TwoTone = ({
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
      d="M9.697 5.518A2.314 2.314 0 0 1 12 3.193a2.314 2.314 0 0 1 2.303 2.325 2.314 2.314 0 0 1-2.304 2.325 2.314 2.314 0 0 1-2.302-2.325M16.394 17.116a2.314 2.314 0 0 1 2.303-2.324A2.314 2.314 0 0 1 21 17.116a2.314 2.314 0 0 1-2.303 2.325 2.314 2.314 0 0 1-2.303-2.325M3 17.116a2.314 2.314 0 0 1 2.303-2.324 2.314 2.314 0 0 1 2.303 2.324 2.314 2.314 0 0 1-2.303 2.325A2.314 2.314 0 0 1 3 17.116"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.506 14.939a8 8 0 0 1-.236-1.934A7.81 7.81 0 0 1 9.7 5.55M6.855 18.834a7.64 7.64 0 0 0 5.143 1.973 7.63 7.63 0 0 0 5.149-1.989M14.305 5.55a7.81 7.81 0 0 1 5.42 7.455c0 .66-.08 1.31-.236 1.925"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShare2TwoTone;
