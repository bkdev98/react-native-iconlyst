import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.913 12.002a7.46 7.46 0 0 0-4.799 4.798 7.47 7.47 0 0 0-4.799-4.798 7.47 7.47 0 0 0 4.8-4.799 7.47 7.47 0 0 0 4.798 4.799"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.478 5.636A9 9 0 1 1 5.75 18.364 9 9 0 0 1 18.478 5.636"
    />
  </Svg>
);
export default IconlystStarsCircleLight;
