import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphLightcurved = ({
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
      d="M13.679 3.349c-.708.815-.99 5.94-.167 6.764.823.822 5.768.406 6.956-.53 2.858-2.25-4.53-8.836-6.79-6.234"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.138 13.79c1.084 1.084-1.79 7.264-7.486 7.264a7.7 7.7 0 0 1-7.702-7.7c0-5.3 5.229-8.69 6.728-7.192.863.863-.11 4.924 1.439 6.473 1.548 1.55 5.937.071 7.02 1.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphLightcurved;
