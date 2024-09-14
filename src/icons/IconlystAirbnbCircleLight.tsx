import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.236c.345.366.871.861 1.312 1.118.357.292 1.629.952 2.774-.135s.396-2.51.252-2.8c-.229-.46-2.81-5.453-2.81-5.453A1.72 1.72 0 0 0 12 7.023c-.67 0-1.241.386-1.527.943 0 0-2.582 4.994-2.81 5.454-.144.289-.893 1.713.252 2.799 1.145 1.087 2.417.427 2.774.135.44-.257.967-.752 1.311-1.118m0 0c-.637-.675-1.488-1.43-1.488-2.446a1.489 1.489 0 1 1 2.977 0c0 1.015-.852 1.771-1.489 2.446"
    />
  </Svg>
);
export default IconlystAirbnbCircleLight;
