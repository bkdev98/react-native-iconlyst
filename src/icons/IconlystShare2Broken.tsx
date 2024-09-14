import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare2Broken = ({
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
      d="M13.98 4.37a2.314 2.314 0 0 1-.832 3.165 2.314 2.314 0 0 1-3.158-.862 2.32 2.32 0 0 1 .42-2.861M21 17.115a2.314 2.314 0 0 0-2.303-2.324 2.314 2.314 0 0 0-2.303 2.324 2.314 2.314 0 0 0 2.303 2.326M3 17.115a2.314 2.314 0 0 1 2.303-2.324 2.314 2.314 0 0 1 2.303 2.324 2.314 2.314 0 0 1-2.303 2.326"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.506 14.939a8 8 0 0 1-.236-1.934A7.81 7.81 0 0 1 9.7 5.55M6.855 18.834a7.64 7.64 0 0 0 5.143 1.973 7.63 7.63 0 0 0 5.149-1.989M14.305 5.55a7.81 7.81 0 0 1 5.42 7.455c0 .66-.08 1.31-.236 1.925"
    />
  </Svg>
);
export default IconlystShare2Broken;
